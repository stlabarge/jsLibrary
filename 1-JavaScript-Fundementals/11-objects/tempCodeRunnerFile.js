  let key = 'water';
      Object.keys(garden).forEach(g => {
    //^^ object keys garder ----> array
          if (key === g) {
              console.log(garden[key]);
          }
      });