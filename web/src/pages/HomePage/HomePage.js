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
      <p> Then </p>
      <ol>
        <li>
          We created a new page to show a single post (the &quot;detail&quot;
          page).
        </li>
        <li>
          We added a route to handle the <code>id</code> of the post and turn it
          into a route param.
        </li>
        <li>We created a cell to fetch and display the post.</li>
        <li>
          Redwood made the world a better place by making that <code>id</code>
          available to us at several key junctions in our code and even turning
          it into a number automatically.
        </li>
        <li>
          We turned the actual post display into a standard React component and
          used it in both the homepage and new detail page.
        </li>
      </ol>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
