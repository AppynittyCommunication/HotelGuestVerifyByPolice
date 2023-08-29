const serverUrl = import.meta.env.DEV ? '/server' : window._env_.SERVER_URL;


export const doUserlogin = async (username, password) => {
    const res = await fetch(`${serverUrl}/api/Account/GisLogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userLoginId: username, userPassword: password,  }),
    });
  
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  };