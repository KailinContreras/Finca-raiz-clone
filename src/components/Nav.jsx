"use client";
import axios from "axios";
import React, { useState } from "react";
import { GoXCircleFill } from "react-icons/go";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Nav = () => {
  const [showVenta, setShowVenta] = useState(false);
  const [showTipoInmueble, setShowTipoInmueble] = useState(false);
  const [showPrecio, setShowPrecio] = useState(false);
  const [tipoInmuebleSeleccionados, setTipoInmuebleSeleccionados] = useState([]);
  const [ventaSeleccionada, setVentaSeleccionada] = useState("");

  const handleToggle = (section) => {
    setShowVenta(section === "venta" ? !showVenta : false);
    setShowTipoInmueble(section === "tipoInmueble" ? !showTipoInmueble : false);
    setShowPrecio(section === "precio" ? !showPrecio : false);
  };

  const handleTipoInmuebleChange = (tipo) => {
    if (tipo === "Todos") {
      setTipoInmuebleSeleccionados(["Todos"]);
    } else {
      setTipoInmuebleSeleccionados((prev) => {
        if (prev.includes("Todos")) {
          return prev.filter((item) => item !== "Todos").concat(tipo);
        }
        return prev.includes(tipo)
          ? prev.filter((item) => item !== tipo)
          : [...prev, tipo];
      });
    }
  };

  const handleRadioDivClick = (value) => {
    setVentaSeleccionada(value);
  };

  const handleRadioChange = (value) => {
    console.log("Selected option:", value);
  };

  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === '') {
      setLocations([]);
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?`, {
        params: {
          key: '542aa94ab3f74e2fb06217c7411ad41e',
          q: e.target.value,
          countrycode: 'co',
          language: 'es'
        }
      });

      setLocations(response.data.results);
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nav w-full h-32 bg-[#ffffff] px-20 top-16 relative z-30">
      <div className="flex w-auto h-16 mx-[68px] pt-4 items-center gap-[10px]">
        <div className="flex py-3 gap-[5px]">
          <span className="w-28 h-9 bg-[#077be7] flex justify-center items-center px-3 py-2 gap-1 rounded-lg">
            <GoXCircleFill className="text-[#bddefd]" />
            <p className="text-[#fff] text-sm font-bold">Proyectos</p>
          </span>
          <span className="w-[60px] h-9 bg-[#077be7] flex justify-center items-center px-3 py-2 rounded-lg">
            <p className="text-[#fff] text-sm font-bold">Venta</p>
          </span>
        </div>
        <button className="text-[#077be7] text-sm py-[1px] px-[6px] font-bold">
          Limpiar filtros
        </button>
      </div>
      <div className="flex w-auto h-16 mx-[68px] pb-4 items-center gap-[10px] relative">
        <input type="text" value={query} onChange={handleSearch} className="relative w-[218px] h-10 py-[7px] px-3 border border-[#c3c3c3] rounded-lg placeholder:font-medium placeholder:text-base placeholder:text-[#cecece] text-base font-medium text-[#456787]" placeholder="🔍︎ Busca por ubicación"/>
        {/* Mostrar sugerencias */}
        {locations.length > 0 && (
              <div className="ubicaciones absolute w-[218px] top-11 h-[200px] bg-white rounded-lg overflow-y-auto">
                <p className='bg-[#e6f2fc] text-[#082663] px-3 py-1 text-sm'>Ubicación</p>
                {locations.map((location, index) => (
                  <div key={index} className="px-4 py-2 cursor-pointer text-[#0a2846] hover:bg-[#f0f0f0]" onClick={() => setQuery(location.formatted)}>
                    {location.formatted}
                  </div>
                ))}
              </div>
            )}
        <div onClick={() => handleToggle("venta")} className="cursor-pointer flex w-[86px] h-10 gap-[5px] p-[10px] border border-[#c3c3c3] rounded-lg justify-center items-center text-[#456787] font-semibold">
          <p>Venta</p>
          {showVenta ? <SlArrowUp size={12} /> : <SlArrowDown size={12} />}
        </div>
        {showVenta && (
          <div className="opciondeventa border border-[#ededed] rounded w-[212px] h-[90px] absolute top-[50px] left-[228px] bg-[#ffffff]">
            {["Venta", "Arriendo"].map((option, idx) => (
              <div key={idx} onClick={() => handleRadioDivClick(option)} className="flex gap-[5px] w-auto h-[45px] items-center pl-3 hover:bg-[#ededed] cursor-pointer">
                <input className="w-5 h-5" type="radio" name="option" checked={ventaSeleccionada === option} readOnly />
                <label htmlFor="option" className="text-base font-medium text-[#456787] p-3">{option}</label>
              </div>
            ))}
          </div>
        )}
        <div onClick={() => handleToggle("tipoInmueble")} className="cursor-pointer flex w-[168px] h-10 gap-[5px] p-[10px] border border-[#c3c3c3] rounded-lg justify-center items-center text-[#456787] font-semibold">
          <p>Tipo de Inmueble</p>
          {showTipoInmueble ? <SlArrowUp size={12} /> : <SlArrowDown size={12} />}
        </div>
        {showTipoInmueble && (
          <div className="opciontiposdeinmuebles border border-[#ededed] rounded absolute top-[50px] left-[324px] bg-[#ffffff] w-[200px] h-[135px] overflow-auto">
            {["Todos", "Casa", "Apartamento", "Apartaestudio"].map((tipo, idx) => (
              <div key={idx} onClick={() => handleTipoInmuebleChange(tipo)} className="flex gap-[5px] w-auto h-[45px] items-center pl-3 hover:bg-[#ededed] cursor-pointer">
                <input type="checkbox" checked={tipoInmuebleSeleccionados.includes(tipo)} readOnly />
                <label className="text-base font-medium text-[#456787]">{tipo}</label>
              </div>
            ))}
          </div>
        )}
        <div onClick={() => handleToggle("precio")} className="cursor-pointer flex w-[88px] h-10 gap-[5px] p-[10px] border border-[#c3c3c3] rounded-lg justify-center items-center text-[#456787] font-semibold">
          <p>Precio</p>
          {showPrecio ? <SlArrowUp size={12} /> : <SlArrowDown size={12} />}
        </div>
        {showPrecio && (
          <div className="w-[278px] h-[132px] p-3 flex flex-col justify-center items-center opcionprecio border border-[#ededed] rounded absolute top-[50px] left-[502px] bg-[#ffffff]">
            <div className="flex items-center w-[254px] h-12 justify-center">
              <input type="text" placeholder="Min $" className="w-[120px] h-12 text-base font-medium placeholder:text-[#8a8a8a] border border-[#c3c3c3] rounded-lg py-[10px] pl-[10px] pr-[30px]"/>
              <p className="text-[#456787]">-</p>
              <input type="text" placeholder="Max $" className="w-[120px] h-12 text-base font-medium placeholder:text-[#8a8a8a] border border-[#c3c3c3] rounded-lg py-[10px] pl-[10px] pr-[30px]"/>
            </div>
            <button className="w-[248px] rounded-lg h-11 border-[#d5dce3] border text-[#bfc7cf] text-sm mt-[15px] px-6 font-bold">Aplicar rango</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;