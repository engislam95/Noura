<template>
  <div class="Authentication">
    <div class="auth container">
      <h5 class="headTitle">يرجى تسجيل الدخول</h5>

      <q-btn-toggle
        v-model="authModel"
        spread
        class="my-custom-toggle q-mb-lg"
        no-caps
        rounded
        unelevated
        toggle-color="amber"
        color="white"
        text-color="black"
        toggle-text-color="black"
        :options="[
          { label: 'مستخدم جديد', value: 'register' },
          { label: 'تسجيل الدخول', value: 'login' },
        ]"
      />
      <q-btn-toggle
        v-if="authModel == 'register'"
        v-model="userKindModel"
        spread
        class="my-custom-second-toggle q-mb-lg"
        no-caps
        rounded
        unelevated
        toggle-color="amber"
        color="transparent"
        text-color="white"
        toggle-text-color="black"
        :options="[
          { label: 'رائد أعمال', value: 'bussinessLead' },
          { label: 'المرشدين', value: 'Guiders' },
          { label: 'المستثمرين', value: 'Investors' },
        ]"
      />
      <!-- -->
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        v-if="authModel == 'register'"
      >
        <q-input
          ref="input"
          :dense="true"
          clearable
          color="green"
          class="justify-center authInput"
          filled
          v-model="registerModel.Fname"
          label="الاسم الأول"
          :rules="[(val) => (val && val.length > 0) || 'إدخل الإسم الأول ']"
        >
        </q-input>
        <q-input
          :dense="true"
          clearable
          color="green"
          class="justify-center authInput"
          filled
          v-model="registerModel.Lname"
          label="الاسم الأخير"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'إدخل الإسم الأخير ']"
        >
        </q-input>

        <q-input
          :dense="true"
          clearable
          color="green"
          v-model="registerModel.password"
          class="justify-center authInput"
          filled
          type="password"
          label="الرقم السري"
          :rules="[(val) => (val && val.length > 0) || 'إدخل كلمة مرور صحيحة']"
        >
        </q-input>

        <q-input
          :dense="true"
          clearable
          color="green"
          class="justify-center authInput"
          filled
          type="email"
          v-model="registerModel.email"
          label="الإيميل"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'إدخل الإيميل']"
        >
        </q-input>

        <q-input
          :dense="true"
          class="justify-center authInput"
          filled
          v-model="registerModel.date"
          mask="date"
          :rules="[(val) => (val && val.length > 0) || 'إدخل تاريخ الميلاد']"
        >
          <template v-slot:append>
            <q-icon name="event" color="white" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="registerModel.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-select
          :dense="true"
          clearable
          color="green"
          class="justify-center authInput"
          filled
          v-model="registerModel.kind"
          :options="kindOptions"
          label="الجنس"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'إختر الجنس ']"
        >
        </q-select>

        <div class="text-center">
          <q-btn
            outline
            rounded
            :loading="loading1"
            type="submit"
            :percentage="percentage1"
            text-color="white"
            color="white"
            class="authBtn"
          >
            تسجيل
            <template v-slot:loading>
              <q-spinner-gears class="on-left" />
              تسجيل الدخول ...
            </template>
          </q-btn>
        </div>
      </q-form>
      <q-form @submit="onSubmit" @reset="onReset" v-if="authModel == 'login'">
        <q-input
          :dense="true"
          clearable
          color="green"
          class="justify-center authInput"
          filled
          type="email"
          v-model="loginModel.email"
          label="الإيميل"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'إدخل الإيميل ']"
        >
        </q-input>
        <q-input
          :dense="true"
          clearable
          color="green"
          v-model="loginModel.password"
          class="justify-center authInput"
          filled
          type="password"
          label="الرقم السري"
          :rules="[(val) => (val && val.length > 0) || 'إدخل كلمة مرور صحيحة ']"
        >
        </q-input>

        <div class="text-center">
          <q-btn
            outline
            rounded
            :loading="loading1"
            type="submit"
            :percentage="percentage1"
            text-color="white"
            color="white"
            class="authBtn"
          >
            تسجيل
            <template v-slot:loading>
              <q-spinner-gears class="on-left" />
              تسجيل الدخول ...
            </template>
          </q-btn>
        </div>
      </q-form>
    </div>
    <div class="containerF q-mt-lg q-pb-lg flex justify-end">
      <img src="../assets/imgs/footer-w.svg" class="q-mb-sm" />
      <p class="text-right footText">
        All rights reserved © Businessnoura 2019
      </p>
    </div>

    <q-dialog v-model="card">
      <q-card class="my-card">
        <img src="../assets/imgs/ball.svg" />

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            ِ أهلا بك، سيتم تدشين هذه الخدمة قريبا اضف ايميلك ليصلك إشعارا عند
            الإطلاق
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-input
            :dense="true"
            color="white"
            outlined
            class="justify-center authInputDialog"
            type="email"
            v-model="popupemail"
            label="اضف ايميلك هنا "
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'إدخل الإيميل ']"
          >
            <template v-slot:append>
              <q-icon name="check_circle_outline" color="grey-11" />
            </template>
          </q-input>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: "Authentication",
  components: {},
  data() {
    return {
      authModel: "register",
      userKindModel: "bussinessLead",
      kindOptions: ["ذكر", "أنثي"],
      loading1: false,
      percentage1: 0,
      card: false,
      popupemail: null,
      registerModel: {
        Fname: null,
        Lname: null,
        password: null,
        email: null,
        date: "2019/02/01",
        kind: null,
      },

      loginModel: {
        email: null,
        password: null,
      },
    };
  },
  created() {
    this.$q.iconSet.field.clear = "check_circle_outline";
    this.$q.iconSet.field.error = "check_circle_outline";
  },
  methods: {
    startComputing(id) {
      this[`loading${id}`] = true;
      this[`percentage${id}`] = 0;
      this[`interval${id}`] = setInterval(() => {
        this[`percentage${id}`] += Math.floor(Math.random() * 8 + 10);
        if (this[`percentage${id}`] >= 100) {
          clearInterval(this[`interval${id}`]);
          this[`loading${id}`] = false;
          this.card = true;
        }
      }, 700);
    },
    onSubmit() {
      console.log(this.registerModel);
      this.startComputing(1);
      console.log(this.loginModel);
    },

    onReset() {},
  },
};
</script>

<style lang="scss">
.headTitle {
  text-align: center;
  font-family: "CairoBold";
}
.auth {
  padding-top: 80px;
  width: 30% !important;
}
.Authentication {
  background-image: url("../assets/imgs/login_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -132px 0px;
}
.q-layout {
  background-image: unset !important;
}
.my-custom-toggle {
  font-family: "CairoBold";
  .q-btn__wrapper {
    justify-content: center;
  }
}
.my-custom-second-toggle {
  font-family: "CairoRegular";
  .q-btn__wrapper {
    justify-content: center;
  }
}
.authBtn {
  width: 50% !important;
}
.authInput {
  width: 100%;
}
.q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  color: #fff !important;
}
.q-item {
  min-height: 35px;
}
.my-card {
  background: transparent !important;
  box-shadow: none !important;
  img {
    width: 30% !important;
    padding-bottom: 40px;
    margin: 0 auto !important;
  }
  .text-subtitle1 {
    font-family: "CairoBold";
    color: #fff;
  }
}
.authInputDialog {
  width: 100% !important;

  .q-field__label {
    color: #fff !important;
  }
}
.q-field--outlined .q-field__control:before {
  border: 1px solid #fff !important;
}
.footText {
  width: 100%;
  color: #fff;
}
.containerF {
  width: 80%;
}
@media (max-width: 900px) {
  .Authentication {
    background-position: -778px 0px;
    background-size: initial;
  }
  .auth {
    width: 80% !important;
    padding-bottom: 50px;
    padding-top: 120px;
  }
  .authBtn {
    width: 80% !important;
  }
}
</style>
