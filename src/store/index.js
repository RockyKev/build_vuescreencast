import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: 1, 
        name: "ES2015 Arrow Functions", 
        description: "<p>ES2015 is a bunch of stuff here and text and stuff</p>", 
        thumbnail: "https://www.fillmurray.com/200/200"
      }, 
      {
        id: 2, 
        name: "ES2015 Template Strings", 
        description: `<p>ES2015 is a bunch of stuff here and text and stuff</p>
                      <p>Some other stuff is a bunch of stuff here and text and stuff</p>
                      <p>And finally is a bunch of stuff here and text and stuff</p>`,
        thumbnail: "https://www.fillmurray.com/200/200"
      },
      {
        id: 3, 
        name: "ES2015 Modules Functions", 
        description: "<p>ES2015 is a bunch of stuff here and text and stuff</p>",
        thumbnail: "https://www.fillmurray.com/200/200"

      },
      {
        id: 4, 
        name: "ES2015 Arrow Functions", 
        description: "<p>ES2015 is a bunch of stuff here and text and stuff</p>",
        thumbnail: "https://www.fillmurray.com/200/200"
      },
      {
        id: 5, 
        name: "ES2015 Promises Functions", 
        description: "<p>ES2015 is a bunch of stuff here and text and stuff</p>",
        thumbnail: "https://www.fillmurray.com/200/200"

      },

    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
