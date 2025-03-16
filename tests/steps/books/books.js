import { request } from '../../utils/requests.js'

export function getBooks() {
  it('Retrieve list of all books', async function() {
    await request(this, 'GET', '/books', undefined, false,
      {
        statusCode: 200,
        validateExpectedTypesInsideArray: [
          { path: 'id', type: 'number' },
          { title: 'title', type: 'string' },
          { title: 'author', type: 'string' },
          { path: 'pageCount', type: 'number' },
          { title: 'country', type: 'string' },
        ],
      }
    )
  })
}
