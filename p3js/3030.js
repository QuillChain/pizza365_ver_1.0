  // declare global variable button element 
  var gSelectedSElement = document.getElementById('selectedS');
  var gSelectedMElement = document.getElementById('selectedM');
  var gSelectedLElement = document.getElementById('selectedL');

  //function on loading page
  onLoadingPage();
  function onLoadingPage() {
    console.log('button gSelectedSElement: ', gSelectedSElement.id, '/innerHTML ~ ', gSelectedSElement.innerHTML);
    console.log('button gSelectedMElement: ', gSelectedMElement.id, '/innerHTML ~ ', gSelectedMElement.innerHTML);
    console.log('button gSelectedLElement: ', gSelectedLElement.id, '/innerHTML ~ ', gSelectedLElement.innerHTML);
  
  }

  // declare function when click  seleced size S
  function onClickS(){
    gSelectedMenuStructure.menuName = 'S';
    console.log('gSelectedMenuStructure.menuName: ', gSelectedMenuStructure.menuName);
    setMenuButtonsColor(gSelectedMenuStructure.menuName);
  }

  // declare function when click  seleced size M
  function onClickM(){
    gSelectedMenuStructure.menuName = 'M';
    console.log('gSelectedMenuStructure.menuName: ', gSelectedMenuStructure.menuName);
    setMenuButtonsColor(gSelectedMenuStructure.menuName);

  }

  // declare function when click  seleced size L
  function onClickL(){
    gSelectedMenuStructure.menuName = 'L';
    console.log('gSelectedMenuStructure.menuName: ', gSelectedMenuStructure.menuName);
    setMenuButtonsColor(gSelectedMenuStructure.menuName);
  }

  // DECLARE FUNCTION SET COLOR FOR gSelectedMenuStructure
  function setMenuButtonsColor(menuStructure){
    if (menuStructure == 'S') {
      gSelectedSElement.className = "w3-button w3-orange w3-padding-large";
      gSelectedMElement.className = "w3-button w3-green w3-padding-large";
      gSelectedLElement.className = "w3-button w3-green w3-padding-large";
    }
    if (menuStructure == 'M') {
      gSelectedSElement.className = "w3-button w3-green w3-padding-large";
      gSelectedMElement.className = "w3-button w3-orange w3-padding-large";
      gSelectedLElement.className = "w3-button w3-green w3-padding-large";
    }
    if (menuStructure == 'L') {
      gSelectedSElement.className = "w3-button w3-green w3-padding-large";
      gSelectedMElement.className = "w3-button w3-green w3-padding-large";
      gSelectedLElement.className = "w3-button w3-orange w3-padding-large";
    }
  }