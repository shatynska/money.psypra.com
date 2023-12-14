import { HttpResponse, http } from 'msw';

export const UsersHandlers = [
  http.post('/login', () => {
    sessionStorage.setItem('is-authenticated', 'true');

    return HttpResponse.json({ status: 200 });
  }),

  http.get('/user', () => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return HttpResponse.json(null, {
        status: 403,
        statusText: 'Not authorized',
      });
    }

    return HttpResponse.json(
      {
        username: 'admin',
      },
      { status: 200 },
    );
  }),
];
