/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [
                {
                id: 1,
                text: "Take out the garbage",
                completed: false
                },
                {
                id: 2,
                text: "Make the bed",
                completed: false
                },
                {
                id: 3,
                text: "Mow the lawn",
                completed: false
                }
                ],
      newTask: { id: "", text: "", completed: false}
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      if(this.newTask.text !== "") {
      this.tasks.push(this.newTask);
      this.newTask = { text: "", completed: false};
      }
    },
    toggleComplete: function(task) {
      task.completed = !task.completed;
    },
    numberOfCompletedTasks: function() {
      var count = 0;
      this.tasks.forEach(function(task) {
        if (task.completed) {
          count++;
        }
      });
      return count;
    },

    removeCompletedTasks: function() {
      var uncompletedTasks = [];
      this.tasks.forEach(function(task) {
        if (!task.completed){
          uncompletedTasks.push(task); 
        }
      });
      this.tasks = uncompletedTasks;
    }
  },

  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});