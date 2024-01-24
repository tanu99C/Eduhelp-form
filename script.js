function changeTab(tabName) {
  const tabs = ['home', 'doubtsection', 'post', 'contact'];

  
  tabs.forEach(tab => {
      document.getElementById(tab).style.display = 'none';
  });

 
  document.getElementById(tabName).style.display = 'block';
}
changeTab('home');
