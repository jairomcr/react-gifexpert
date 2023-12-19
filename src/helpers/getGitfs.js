export const getGitfs = async() => {
    const url = 'http://jsonplaceholder.typicode.com/users';
    const resp = await fetch(url);
    const data = await resp.json();

    const gifs = data.map(user=>{
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        address:user.address.street
      }
    }) 

    //console.log(gifs);
    return gifs;
  }