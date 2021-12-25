const Scroll = () => {
  const scrollValue = 160;

  const element = (id) => {
    return document.getElementById(id).style;
  }

  if (document.body.scrollTop > scrollValue || document.documentElement.scrollTop > scrollValue) {
    element('infoUser').displaaway = 'none';
    element('inputHeader').maxWidth = '100%';
    element('inputHeader').height = '200px';
    element('image').width = '100px';
  } else {
    element('inputHeader').maxWidth = '600px';
    element('inputHeader').height = 'auto';
    element('image').width = '200px';
    element('infoUser').display = 'flex';
  }
}

export default Scroll;
