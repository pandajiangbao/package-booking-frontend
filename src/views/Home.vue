<template>
    <div class="home">
        <a-button class="filter-button" @click="type='All'">All</a-button>
        <a-button class="filter-button" @click="type='已预约'">已预约</a-button>
        <a-button class="filter-button" @click="type='已取件'">已取件</a-button>
        <a-button class="filter-button" @click="type='未预约'">未预约</a-button>
        <a-button
            class="filter-button"
            size="large"
            type="danger"
            shape="circle"
            @click="isOpen=true"
        >+</a-button>
        <div class="table-container">
            <a-table
                :columns="columns"
                :rowKey="record=>record.orderNumber"
                :dataSource="showDataSource"
            >
                <a-button
                    type="danger"
                    slot="action"
                    slot-scope="text,record"
                    v-if="record.status!='已取件'"
                    @click="toConfirm(record)"
                >确认收货</a-button>
            </a-table>
        </div>
        <a-modal title="包裹入库" v-model="isOpen" @ok="handleSubmit">
            <a-form>
                <a-form-item label="运单号" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
                    <a-input v-model="form.orderNumber" />
                </a-form-item>
                <a-form-item label="收件人" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
                    <a-input v-model="form.receiver" />
                </a-form-item>
                <a-form-item label="电话" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
                    <a-input v-model="form.phoneNumber" />
                </a-form-item>
                <a-form-item label="重量" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
                    <a-input v-model="form.weight" />
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      type: 'All',
      isOpen: false,
      form: {
        orderNumber: '',
        receiver: '',
        phoneNumber: '',
        weight: 0.0
      },
      columns: [
        {
          title: '运单号',
          dataIndex: 'orderNumber',
          align: 'center'
        },
        {
          title: '收件人',
          dataIndex: 'receiver',
          align: 'center'
        },
        {
          title: '电话',
          dataIndex: 'phoneNumber',
          align: 'center'
        },
        {
          title: '状态',
          dataIndex: 'status',
          align: 'center'
        },
        {
          title: '预约时间',
          dataIndex: 'bookingTime',
          align: 'center'
        },
        {
          title: '操作',
          align: 'center',
          key: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  computed: {
    showDataSource () {
      if (this.type === 'All') {
        return this.$store.state.packageOrderList
      }
      return this.$store.state.packageOrderList.filter(
        item => item.status === this.type
      )
    }
  },
  mounted () {
    this.$store.dispatch('getPackageOrderList')
  },
  methods: {
    toAdd () {
      this.$router.push('/add')
    },
    toConfirm (record) {
      let temp = record
      temp.status = '已取件'
      this.$store.dispatch('updatePackageOrder', temp)
    },
    handleSubmit () {
      this.$store.dispatch('createPackageOrder', this.form).then(() => {
        this.isOpen = false
      })
    }
  },
  components: {}
}
</script>
<style>
.table-container {
    width: 960px;
    height: 500px;
    border: 2px solid gray;
    margin: 0 auto;
}
.filter-button {
    margin: 20px 80px;
}
</style>
