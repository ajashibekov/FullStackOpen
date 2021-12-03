const dummy = (blogs) => {
  blogs
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(blog => blog.likes).reduce((a, b) => a + b, 0)
}

const favoriteBlog = (blogs) => {
  const max = blogs.reduce((prev, curr) => {
    return (prev.likes > curr.likes) ? prev : curr
  }, {})
  return max
}

const mostBlogs = (blogList) => {
  if(blogList.length === 0) return undefined
  const obj = {}
  let maxAuth = '', maxCount = 0
  blogList.forEach(blog => {
    const author = blog.author
    if(author in obj){
      obj[author]++
    } else {
      obj[author] = 1
    }
    if(obj[author] > maxCount){
      maxCount = obj[author]
      maxAuth = author
    }
  })
  return { author: maxAuth, blogs: maxCount }
}

const mostLikes = (blogList) => {
  if(blogList.length === 0) return undefined
  const obj = {}
  let maxAuth = '', maxLikes = 0
  blogList.forEach(blog => {
    const author = blog.author
    if(author in obj){
      obj[author] += blog.likes
    } else {
      obj[author] = blog.likes
    }
    if(obj[author] > maxLikes){
      maxLikes = obj[author]
      maxAuth = author
    }
  })
  return { author: maxAuth, likes: maxLikes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}