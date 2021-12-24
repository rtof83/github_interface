const Scroll = () => {
  const scrollValue = 160;

  const element = (id) => {
    return document.getElementById(id).style;
  }

  if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
    element('infoUser').display = 'none';
    element('header').maxWidth = '100%';
    element('header').height = '200px';
    element('image').width = '100px';
  } else {

    element('header').maxWidth = '600px';
    element('header').height = 'auto';
    element('image').width = '200px';
    element('infoUser').display = 'flex';
  }
}

export default Scroll;
