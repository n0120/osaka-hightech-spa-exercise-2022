const RootComponent = {
  data() {
    return {
      'api': 'gc7Aq5dppJetPXJYHaIDk7IZEWOuCTioYGiICBvg',          // API キー (State)
      'prefecture':0, // 県番号 (State)　# ここで無理やり設定
    };
  },

  methods: {
    // 県番号 (State) の変更を行う関数
    setPrefecture(n) {
      this.prefecture = n;
    },
  },

  components: {
    PrefectureSelector,
    PopulationBarPlot,
  },
};

Vue.createApp(RootComponent).mount('#app');
