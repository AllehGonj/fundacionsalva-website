var homeApp = angular.module('home',[]);

homeApp.controller('home-controller', function(){
  var vm  = this;

  vm.listControls = [
    {
      title: 'Historial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.',
      btn_text: 'test text'
    },
    {
        title: 'Historial1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.',
        btn_text: 'test text'
      },
      {
        title: 'Historial2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.',
        btn_text: 'test text'
      },
      {
        title: 'Historial3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.',
        btn_text: 'test text'
      }
  ];
});