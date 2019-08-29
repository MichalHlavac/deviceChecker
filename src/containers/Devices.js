import React,{useState,useContext} from 'react';
import DeviceButton from './DeviceButton';
import {DevicesContext} from './DevicesContext';
import {DevicesSection} from '../components/styledDevices';

export default ()=>{
    const [devices,setDevices]=useContext(DevicesContext);
    const [filter,setFilter]=useState({"vendor":"nezáleží","os":"nezáleží"});
    const deviceFilter=(device)=>{
        switch(true){
            case((filter.vendor==="nezáleží")&&(filter.os==="nezáleží")):
                return device;
            case((filter.vendor==="nezáleží")&&(device.os!=undefined)):
                return (device.os.toLowerCase()===filter.os);
            case((filter.os==="nezáleží")&&(device.vendor!=undefined)):
                return (device.vendor.toLowerCase()===filter.vendor);
            case(((filter.os!="nezáleží")||(filter.os!=undefined))&&((filter.vendor!="nezáleží")||(filter.vendor!=undefined))):
                return (device.vendor.toLowerCase()===filter.vendor)&&(device.os.toLowerCase()===filter.os);
            default:
                return null;
        }
    };
    const isVisible = devices.filter(deviceFilter);
    const visibleDevices = isVisible.map((device,i)=>
        <section key={i}>
            <img src={((device.image==="")||!(device.image))?("https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg"):(device.image)} alt={device.model}/>
            <h2>{device.model}</h2>
            <h3>{device.vendor}</h3>
            <h3>{device.os}</h3>
            <DeviceButton device={device}/>
        </section>)
    const VendorReducer = (all,curent)=>{
        if((curent.vendor!=="")&&(curent.vendor!==undefined)){
            return [...new Set([...all,curent.vendor.toLowerCase()])]}
        return all
        }
    const vendor = devices.reduce((VendorReducer),["nezáleží"]);
    const OsReducer = (all,curent)=>{
        if((curent.os!=="")&&(curent.os!==undefined)){
            return [...new Set([...all,curent.os.toLowerCase()])]}
        return all
        }
    const os = devices.reduce((OsReducer),["nezáleží"]);
    const vendorOptions = vendor.map((voption,i)=><option key={i} value={voption}>{voption}</option>);
    const osOptions = os.map((osOption,i)=><option key={i} value={osOption}>{osOption}</option>);
    const handleChange = (e) => {setFilter({ ...filter, [e.target.name]: e.target.value })}
    return(
        <DevicesSection>
            <nav>
                <label htmlFor="vendor">Výrobce</label>
                <select name="vendor" id="vendor" onChange={handleChange}>
                    {vendorOptions}
                </select>
                <label htmlFor="os">os</label>
                <select name="os" onChange={handleChange}>
                    {osOptions}
                </select>
            </nav>
            <article className="devices">
                {visibleDevices}
            </article>
        </DevicesSection>
        )
}