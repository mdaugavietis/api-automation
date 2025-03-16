import { getBooks } from '../../steps/books/books.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

describe('Books', () => {
  describe("List books", () => {
    getBooks()
  })
})
