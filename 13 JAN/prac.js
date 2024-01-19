function fetchUserData(userId) {
    return fetch(`https://api.example.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        return response.json();
      })
      .then(userData => {
        // Process user data
        return userData;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
  fetchUserData(123)
    .then(data => console.log('User data:', data));

    async function fetchUserData(userId) {
        try {
          const response = await fetch(`https://api.example.com/users/${userId}`);
          if (!response.ok) {
            throw new Error('Network error');
          }
          const userData = await response.json();
          // Process user data
          return userData;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      
      fetchUserData(123)
        .then(data => console.log('User data:', data));

        // Generator function for asynchronous control flow
function* fetchUserActivity() {
    try {
      const userData = yield fetch('https://api.example.com/user');
      const activity = yield fetch(`https://api.example.com/user/${userData.id}/activity`);
      // Process user activity
      console.log('User activity:', activity);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Usage of generator
  const iterator = fetchUserActivity();
  const userDataPromise = iterator.next().value;
  
  userDataPromise
    .then(userData => iterator.next(userData).value)
    .then(activity => iterator.next(activity));
  