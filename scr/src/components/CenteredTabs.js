import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DropDownMenu from './DropDownMenu';
import ListDividers from './Listdividers'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CenteredTabs=()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const[showServices,setShowServices] = React.useState(true);
  const[showEmpresa,setShowEmpresa] = React.useState(true);
  const[showfounders,setShowFounders] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickServices =()=>{
  setShowFounders(true);  
  setShowEmpresa(true);
    setShowServices(false);
  };

  const onClickEmpresa =()=>{
    setShowFounders(true);  
    setShowEmpresa(false);
      setShowServices(true);
    };

    const onClickFounders =()=>{
      setShowFounders(false);  
      setShowEmpresa(true);
        setShowServices(true);
      };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Empresa" onClick={onClickEmpresa}/>
        <Tab label="Servicios" onClick={onClickServices}/>
        <Tab label="Founders" onClick={onClickFounders} />
      </Tabs>
      <div>
                  {!showServices &&  <ListDividers></ListDividers>}

    </div>
    </Paper>
   

  );
}
export default  CenteredTabs;