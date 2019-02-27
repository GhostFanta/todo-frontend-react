const request = require('superagent');

const BASE_URL = 'http://localhost:3000';

export default agent = {
  login: (username, password) => {
    request.post(`${BASE_URL}/user/login`)
      .set('Accept', 'application/json')
      .send({username: username})
      .send({password: password})
      .accept('application/json')
      .then((res) => {
        console.log(res.status);
        console.log(res.headers);
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },
  logout: (token) => {
    request.post(`${BASE_URL}/user/logout`)
      .set('Accept', 'application/json')
      .set('x-auth', token.toString())
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(res);
    })
  },

  createUser: (body) => {
    request.post(`${BASE_URL}/signup`)
      .set('Accept', 'application/json')
      .send(body)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(err);
    })
  },
  updateUser: (token, body) => {
    request.put(`${BASE_URL}/user`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },
  getUser: (token) => {
    request.get(`${BASE_URL}/user`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .then((res) => {
        console.log(res.status);
        console.log(res.headers);
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },

  createTodoList: (token, body) => {
    request.post(`${BASE_URL}/createnewlist`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {

      }).catch((err) => {
      console.log(err);
    });
  },
  getTodolists: (token) => {
    request.get(`${BASE_URL}/`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .then((res) => {
        return Promise(res);
        console.log(res.status);
        console.log(res.headers);
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },
  getTodolist: (token, listid) => {
    request.get(`${BASE_URL}/todolist/${listid}`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .then((res) => {
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },
  updateTodolist: (token, listid, body) => {
    request.put(`${BASE_URL}/todolist/`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    })
  },
  deleteTodolist: (token, body) => {
    request.delete(`${BASE_URL}/todolist/`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(err);
    })
  },
}
