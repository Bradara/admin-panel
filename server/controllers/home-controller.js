module.exports = {
  index: (req, res) => {
    res.render('home/index')
  },
  about: (req, res) => {
    res.render('home/about')
  },
  channelsView:(req,res) => {
    res.render('/channels/view')
  },
  channelsAdd:(req,res) =>{
    res.render('/channels/add')
  },
  channelsEdit:(req,res) =>{
    res.render('/channels/edit')
  }

}
