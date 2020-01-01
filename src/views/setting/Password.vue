<template>
  <div>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="85">
      <FormItem label="原密码" prop="password">
        <Input type="password" v-model="formCustom.password" style="width: 200px"/>
      </FormItem>
      <FormItem label="新密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd" style="width: 200px"/>
      </FormItem>
      <FormItem label="确认新密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck" style="width: 200px"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">确认修改</Button>
        <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    const validatePassWord = (rule, value, callback) => {
      if (value === "") {
        // return callback(new Error("请输入原密码"));
        callback(new Error("请输入原密码"));
      } else {
        callback();
      }
      // 模拟异步验证效果
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error("Please enter a numeric value"));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error("Must be over 18 years of age"));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的新密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入您的新密码"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };

    return {
      formCustom: {
        password: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        password: [{ validator: validatePassWord, trigger: "blur" }],
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style>
</style>
