const sessIdtouser = new Map();


function setUser(id, user) {
    sessIdtouser.set(id, user);
  }
  
  function getUser(id) {
    return sessIdtouser.get(id);
  }
  
  module.exports = {
    setUser,
    getUser,
  };