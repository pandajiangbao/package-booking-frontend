<template>
    <div class="about">
        <h2>预约取件</h2>
        <a-form>
            <a-form-item label="运单号" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
                <a-input v-model="form.orderNumber" />
            </a-form-item>
            <a-form-item label="取件时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
                <a-date-picker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="Select Time"
                    @change="onChange"
                />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
                <a-button type="danger" @click="$router.go(-1)" style="margin:0 10px;">取消</a-button>
                <a-button type="primary" @click="handleSubmit">预约</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        orderNumber: '',
        bookingTime: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('setBookingTime', this.form).then(() => {
        this.$router.go(-1)
      })
    },
    onChange (value, dateString) {
      this.form.bookingTime = dateString
    }
  }
}
</script>

<style lang="">
</style>
