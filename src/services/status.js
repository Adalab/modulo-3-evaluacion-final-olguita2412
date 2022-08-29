const iconStatus = (value) => {
    if(value) {
        return <i className="fa-solid fa-heart-pulse icon fa-2x"></i>;
    }   return <i class="fa-solid fa-heart-crack fa-2x"></i>;

}

const status = (gender, value) => {
    if (gender === 'female'){
        if (value){
            return 'Viva';
        } return 'Muerta';
      } if(gender === 'male'){
        if (value){
            return 'Vivo';
        } return 'Muerto';
      }
}

const objectToExport = {
    status: status,
    icon: iconStatus,
  };
  
  export default objectToExport;