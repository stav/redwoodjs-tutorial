import BlogLayout from 'src/layouts/BlogLayout'

import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>To sum up, what did we actually do to get this far?</p>
      <ul>
        <li>Generate the homepage</li>
        <li>Generate the blog layout</li>
        <li>Define the database schema</li>
        <li>Run migrations to update the database and create a table</li>
        <li>Scaffold a CRUD interface to the database table</li>
        <li>
          Create a cell to load the data and take care of
          loading/empty/failure/success states
        </li>
        <li>Add the cell to the page</li>
      </ul>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
