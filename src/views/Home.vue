<template>
  <div class="home container">
    <div class="row q-mb-lg container">
      <div class="col-10">
        <div class="row">
          <div class="col-xs-1 col-md-3 col-lg-3 col-xl-3 q-pb-lg">
            <img src="../assets/imgs/ball.svg" />
          </div>
          <div class="col-xs-11 col-md-9 col-lg-9 col-xl-9">
            <h5 class="noraHead">
              منصة بزنس نورة، تجربة تعــلّـمـ رائعة تستند إلى خبـــرات حقيقـة
              بكل ما يخص ريادة الأعمال
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="sliderC">
      <div class="row">
        <div class="col-xs-12 col-md-3 col-lg-3 col-xl-3 q-mb-md">
          <div class="row justify-start">
            <q-btn-toggle
              class="colDir"
              unelevated
              text-color="grey"
              toggle-text-color="black"
              toggle-color="Bigger"
              v-model="slide"
              :options="[
                { value: 'one', slot: 'one' },
                { value: 'two', slot: 'two' },
                { value: 'three', slot: 'three' },
                { value: 'four', slot: 'four' },
              ]"
            >
              <template v-slot:one>
                <div class="row no-wrap q-mb-lg">
                  <div class="text-left slideVertical">
                    <p>سوق العمل</p>
                    <small> اطلع على آخر نماذجنا </small>
                  </div>
                </div>
              </template>

              <template v-slot:two>
                <div class="row no-wrap q-mb-lg">
                  <div class="text-left slideVertical">
                    <p>ورشة عمل بعنوان...</p>
                    <small> سجل الآن </small>
                  </div>
                </div>
              </template>

              <template v-slot:three>
                <div class="row no-wrap q-mb-lg">
                  <div class="text-left slideVertical">
                    <p>ورشة عمل بعنوان...</p>
                    <small> سجل الآن </small>
                  </div>
                </div>
              </template>
              <template v-slot:four>
                <div class="row no-wrap q-mb-lg">
                  <div class="text-left slideVertical">
                    <p>ورشة عمل بعنوان...</p>
                    <small> سجل الآن </small>
                  </div>
                </div>
              </template>
            </q-btn-toggle>
          </div>
        </div>
        <div class="col-xs-12 col-md-9 col-lg-9 col-xl-9 wrapperImage">
          <img src="../assets/imgs/flag.svg" class="flagImg" />
          <q-carousel
            v-model="slide"
            dark
            transition-prev="keyboard_arrow_left"
            transition-next="keyboard_arrow_right"
            animated
            control-color="black"
            padding
            arrows
            height="300px"
            style="border-radius: 15px"
            class="bg-white text-white shadow-1 rounded-borders"
          >
            <q-carousel-slide
              v-for="slider in sliderOptions"
              :key="slider.name"
              :name="slider.name"
              :img-src="slider.img"
            />
          </q-carousel>
        </div>
      </div>
    </div>

    <img src="../assets/imgs/lines.svg" class="q-mb-lg linesBg" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      slide: "one",
      sliderOptions: [
        {
          name: "one",
          img: require("../../public/img/icons/slider-one.png"),
        },
        {
          name: "two",
          img: require("../../public/img/icons/slider-one.png"),
        },
        {
          name: "three",
          img: require("../../public/img/icons/slider-one.png"),
        },
        {
          name: "four",
          img: require("../../public/img/icons/slider-one.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
.colDir {
  flex-direction: column;
}
.slideVertical {
  small {
    padding-bottom: 5px;
    border-bottom: 3px solid grey;
  }
  p {
    margin: 0 !important;
  }
}
.bg-Bigger {
  color: black !important;
  .slideVertical small {
    border-bottom: 4px solid #1e8fff !important;
  }

  p {
    font-size: 20px !important;
  }
  small,
  p {
    font-family: "CairoBold";
  }
}
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  background-color: #ffd100 !important;
  background-blend-mode: overlay !important;
}
.q-carousel__arrow .q-icon {
  border: 1px solid;
  border-radius: 50%;
}
.q-carousel__arrow .q-btn .q-btn__content i {
  color: #00000091 !important;
}
.sliderC {
  background: #fff;
  padding: 2%;
  box-shadow: -5px 5px 5px 5px #aaaaaa1f !important;
  margin-bottom: 2% !important;
}
.home .q-anchor--skip {
  justify-content: start !important;
}
.linesBg {
  width: 100%;
}
.wrapperImage {
  position: relative;
}
.flagImg {
  position: absolute;
  right: 25px;
  z-index: 2;
  top: -5px;
}
@media (max-width: 900px) {
  .noraHead {
    padding-top: 100px;
  }
}
</style>