import React, { useState, useEffect } from "react";
import SelectedOption from "../component/selected_options";
import Search from "../component/search";
import PartsInventory from "../component/Parts-Inventory";
import Pagination from "../component/Pagination";
import Model from "../component/Model";

function Inventorylist() {
  const [menufecture, Setmenufecture] = useState([
    "Teradyne",
    "Advantest",
    "AMP",
    "Verigy",
    "Transformatoren Technik",
    "Derpipe",
    "3M",
    "Tadiran",
    "Western Digital",
    "Toshiba",
    "Nextest",
    "Agilent",
    "Intel",
    "Hewlett Packard",
    "Nvidia","Eagle",
    "Electroglas",
    "Mitsubishi Electric",
    "IDEC CORP (IZUMI)",
    "Ross",
    "Sparc",
    "Shinwa",
    "N/A",
    "Ando",
    "SUN",
    "Viewsonic",
    "SB TEK",
    "IBM",
    "Miscellaneous",
    "Credence",
    "Digital Equip",
    "Exatron",
    "TSK",
    "TEL","Research Instruments","KLA-Tencor","Shin Etsu","Chroma","Zygo","Nordson","National Instrument","Accretech","STI","Foup","Seiko Epson","Techwing","PVA TePla","Karl Suss","Yokogawa","Entegris","Dyna Tech","Delta","Lintec","Hontech","Camtek","Laurier","Synax","Reid Ashman"]);


  const [model_list,setmodel_list] = useState([
    "Catalyst",
    "V93K SD",
    "Magnum",
    "T5334",
    "N/A",
    "83K",
    "E2760",
    "T55XX",
    "T5365/65P",
    "T5336",
    "T5593",
    "Magnum 1 SSV",
    "ETS300",
    "T2K",
    "J750",
    "MAG 1",
    "T5375",
    "Magnum II",
    "V5400",
    "T5365P",
    "T5377",
    "J750EX",
    "V4100",
    "T6672/73",
    "T2000",
    "T6672",
    "T5781ES",
    "T5581/81H",
    "T5592",
    "T5581P",
    "T5334/35/35P/65/65P/81/81H/82A",
    "T5581/81H/81P/85/86/91/T6671E",
    "T5377S",
    "T6552T",
    "T5585/M6541/42AD",
    "TP3, TP4",
    "T5581/81H/81P",
    "T5334/35/35P/65/65P/T5581/81H/82A",
    "T5334/35/35P/63/65/65P/82A/T5581",
    "T5581/81H/81P/85/86/91/92/t6672/73",
    "T5581/81H/81P/85/86/91",
    "T6533/63/73/T6672/73",
    "T5592/T6672/73",
    "T6672/73/82",
    "T6577/T6672/73/83",
    "T6371/72/T6535/65/73/75/75A/T6672/T7721",
    "T6577/T6672/73/82/83",
    "T5581/81H/81P/85/91/92/T6672",
    "TP4/TP4A/TP4B",
    "T5334/35/35P/63/65/65P/82A/T5581/81H/81P",
    "T5334/35/35P/63/65/65P/T5581",
    "T5334/35/35P/65/65P/82A/T5581/81H",
    "TP4",
    "T5334/35/35P/63/63P/65/65P/82A/T5581/81H",
    "TP3",
    "T3320/40",
    "T5336/71/75/T5581/81H/81P/85/91",
    "T6575",
    "T5334/35/35P/63/65/65P/T5581/81H/81P/82A",
    "T3331B",
    "T5371/72/75/77/77S/T5585/93",
    "T3320/40/T7341",
    "T5334/35/35P/65/65P/82A",
    "T5335/65/82A",
    "T6371",
    "T5581",
    "T5585",
    "T5336/71",
    "T3320/40/41/44",
    "T5371",
    "T5335",
    "T5591",
    "T5585/92/T6672",
    "T5334/35/35P",
    "T3320",
    "T5363P/65/65P/82/82A",
    "T5365/65P/82A",
    "T5382A",
    "T5333/33P/34/35/35P/65/65P/82A",
    "T5333/34/35/35P/65/65P/82A",
    "T5334/35/35P/65/65P/T5582A",
    "T5363/63P/65/65P/82A/T5581/81H/82A",
    "T3340/T7321/22/41",
    "T5381/81A",
    "T3324/26A/44/46/47A",
    "T3320/32/T5331P",
    "5581H",
    "T5581/81P",
    "T5371/75",
    "T5311/36/71/T5581P/85/86/91/92",
    "T5333/34/35/35P",
    "T5335/35P",
    "T5333/33P/34/35/35P",
    "T5335P",
    "T5334/35/35P/65P/T5581P",
    "T5333P/34/35/35P/63/65/65P",
    "T5333/33P/34/35/35P/71",
    "T5335/35P/65/65P/82A/T5581/81H",
    "T5335/35P/65/65P",
    "T5333/33P/34/35/65/65P/82A",
    "T5365/82A",
    "T5334/35/36",
    "T3326/47A/B",
    "T5336/71/T5581P/85/86/91/92",
    "M67XX",
    "T5371/T5592/93/T6567/77/T6672/73",
    "T5581/81H/81P/85/86/91/92/T6672/73",
    "M6721A/41A/42A",
    "T5581/81H/85P",
    "T5581/81H/85",
    "T5581/6672",
    "T5581/5581H/81P",
    "5581/81H",
    "T5581P/5571P",
    "T5581/81H/71P",
    "T5375/77",
    "T3324",
    "MXXXX",
    "V0101",
    "T5581P/91",
    "GDM-1662B",
    "P200 6555-7E3",
    "GDM-17E10",
    "T3340/T7341",
    "T3340/20",
    "T3340",
    "T3340/41",
    "T3316/24/26/47A/47B/82",
    "T3334/T5335",
    "T5381",
    "T3324/44",
    "T3325/46/T7342",
    "T3316/24/26A/47A/47B",
    "T3316/24/26/47A/47B",
    "T3681",
    "T3324/46",
    "TP3A",
    "TP1/TP3",
    "T3316/24/26A/47A/47B/T7312/13/15/23/42",
    "T3324/44/46/T7312/42",
    "T3320/40/T7321/22",
    "A-STAR",
    "TP1",
    "T3332/33/35",
    "T3332/32P/33",
    "T3316/20/24/26A/26B/40/47A/47B",
    "T3325/46/47",
    "T5334/65/T5581H",
    "T3316/24/26A/47A/82/T7323/42",
    "T6671E",
    "T5363/63P",
    "T5332P/61",
    "T5363/63P/65/65P/82A/T558",
    "T6671A/71B",
    "T3381/82",
    "T3344/81",
    "T3381",
    "T5381/81A/53XX",
    "T3381/82/T5381",
    "T7321/22/41/42",
    "T5331/31P",
    "T5362/63",
    "T5331/31P/61/62/63/81",
    "T5331/61/63P/65/65P",
    "T6671B/71E/72/73/A-SITE",
    "T6533/63/73/T6672/73/A-SITE",
    "T6331/61/71/T6533/63/73/T6672/73",
    "T3332",
    "TP1/3",
    "T3381/T5381/T53XX",
    "DEC Advansite",
    "T3332/T5365P",
    "T5332P/63P",
    "T5581/81H81P",
    "T5333P/35/35P/65/65P/T5581/81H/82A",
    "T5334/35/35P/63/63P/65/65",
    "T3344/T3681",
    "T6682",
    "T3326A/47A",
    "T5334/35/35P/63/65/65P/81",
    "T5581/5581H",
    "T5363P/65/65P/82A",
    "T5361/62",
    "T5363P/65/65P",
    "T5361/62/53XX",
    "T5361/62/63P/65/65P",
    "T5365",
    "T5361",
    "T5362/63/63P",
    "T5361/5362/53XX",
    "T3326/47",
    "T3324/T7321/22",
    "T3316/24/26A",
    "T3340/7341",
    "T5382/82A",
    "LT1101",
    "Advansite Microvax",
    "T5334/35",
    "T3316/26A",
    "T3381/T5381",
    "T3316/20/24/26A/40/44/47A/47B/T7323",
    "T3340/81",
    "T3332P/35P",
    "T3331",
    "T5334/5335/5335P",
    "T7321/22/41",
    "T3340/41/43",
    "T3382/82A",
    "T3344/24",
    "T3324/46/82",
    "T3344/81/T3681",
    "T3324/40/T7321/22",
    "T5331/31P/61/81",
    "T5331P/81",
    "T3340/41/43/T7341",
    "ADVANsite",
    "T3332/33/5331/31P",
    "T3324/26A/47/47A",
    "T3316/24/26A/47A/47B/T734",
    "T3332/33",
    "T3320/24/32/40",
    "T5331/31P/3332",
    "TP2",
    "T3326/47A/47B",
    "T5363P/82A",
    "T5381/61/31",
    "T310/31",
    "T6671E/S",
    "A-Site/W2345/T3347A/T5335/65P/T7323",
    "ETS-364",
    "V93000 SS CTH",
    "T2000 GVIUP (LS Frame)",
    "Exatron 202 Tape and Reel System",
    "UF3000",
    "T5832ES",
    "V93000 PS1600 STH",
    "Exatron 904",
    "Precio XL",
    "Precio",
    "Magnum 2 EV",
    "T2000LS",
    "MBR EUV Reflectometer",
    "ICOS T-120",
    "UF3000LX",
    "Magnum 2 PV",
    "T5588 & M6242 Test Cell",
    "300EX S281 Aquaproof",
    "Advantest T5383/ UF3000EX Test Cell",
    "Advantest T6372 ND2",
    "V93000 PS800 STH",
    "Chroma 3110 Handler",
    "Magnum V GV VP",
    "4386A-2 Mask Metrology System",
    "AP1000",
    "PXI End of Line Vision Tester",
    "T5376",
    "T6373",
    "UF3000EX",
    "V9300 PS1600 CTH",
    "V9300 PS800 LTH",
    "TR-48 iii",
    "(2) ETS-364",
    "T5588",
    "300EX 300mm 12\"",
    "ETS-88",
    "MicroFlex",
    "ETS-300",
    "T2000 Air",
    "Verigy PS400 Test Systems (1LTH, 2 STH available)",
    "93000 PS800",
    "Electroglas 4090u",
    "UltraFlex HD",
    "EG6000",
    "NS6040",
    "U3772 Spectrum Analyzer 9kHz – 43 GHz",
    "J750EX HD",
    "IP750EX",
    "Integra Hexa",
    "T5833/32",
    "TW-3Ti",
    "T5503/M6242",
    "iFlex",
    "Magnum2x SSV",
    "T5503A",
    "4073A",
    "4073B",
    "ASM9219",
    "NS8040",
    "V93000 PS1600",
    "J750EX-HD",
    "ETS-200T",
    "M6751AD",
    "T5503",
    "NS7080",
    "P-12XLm",
    "T5372",
    "Sidewinder",
    "PS80 Plus",
    "MA200",
    "ST6730A",
    "T6577",
    "KA 202-80SHH",
    "DT-TLD2030-WM",
    "EG4090µ",
    "M6300",
    "UF200",
    "Magnum I SV",
    "Eclipse",
    "M4541AD",
    "Magnum 1 PV",
    "NS7000",
    "V93000 PS800",
    "ETS88",
    "IntegraFlex",
    "UltraFlex",
    "UF3000EXE",
    "D10",
    "3160",
    "Silver Star 5 Tons",
    "93000 P1000",
    "93000 PS400",
    "V93000 C200e",
    "M4541A",
    "RAD 2500F/12",
    "HT3000SLT",
    "M4871",
    "Condor 202M",
    "DS7000",
    "Magnum II EV",
    "NS5040 F3",
    "1701N",
    "OM1740",
    "ETS364",
    "RAD 2500F/8",
    "3260SLT",
    "TR60",
    "T3347A",
    "Test",
    "ASL3000"
]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setsearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [noresult, setnoresult] = useState("");
  const [totalProducts, settotalProducts] = useState();
  const [searchfill, setsearchfill] = useState(false);
  const [height, setheight] = useState();
  const [menufecture_active, Setmenufecture_active] = useState("");
  const [model, Setmodel] = useState("");

  const fetchData = async (page) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jadgroup2.goaspendigital.com/api/part_inventory.php?page=${page}&search=${searchInput}&manufacturer=${menufecture_active}&model=${model}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.error) {
        console.error("Error fetching data:", responseData.error);
      } else {
        setLoading(false);
        seteqipment_list(responseData.message);
        settotalProducts(responseData.TotalProducts);

        setnoresult("No result found");

        console.log(response);
        console.log(responseData);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const [equipment_list, seteqipment_list] = useState([]);

  const sendIframeHeightToParent = () => {
    //0.85

    const iframeHeight = document.body.scrollHeight;
    
    const windowWidth = window.innerWidth;
    if(windowWidth > 500) {

      console.log("Sending iframe height:", iframeHeight);
      window.parent.postMessage(
        { messageType: "iframeHeight", data: iframeHeight },
        "*"
      );
    }
    else {
    
      let totalHeight = (windowWidth * 0.8533) * equipment_list.length
      console.log("Sending iframe height:", totalHeight);
      window.parent.postMessage(
        { messageType: "iframeHeight", data: totalHeight },
        "*"
      );
    }

    setheight(iframeHeight);
  };

  useEffect(() => {
    sendIframeHeightToParent();
    console.log("ari")
  }, [totalProducts]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, searchInput, menufecture_active,model]);

  const searchfunction = (query) => {
    console.log(query);
    setsearch(query);
    setCurrentPage(1);
  };

  const Setmenufecture_fun = (event) => {
    Setmenufecture_active(event);
    setCurrentPage(1);
  };

  const clearFilter = () => {
    searchfunction("");
    Setmenufecture_active("");
    setCurrentPage(1);
    Setmodel("")
  };

  const handlePageChange = async (newPage) => {
    setCurrentPage(newPage);

    try {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.parent.postMessage({ messageType: "scrolltop", data: 0 }, "*");

      const response = await fetchData(newPage);
      console.log("Page changed:", newPage);
      // Process the response if needed
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleModelChange = (event) => {
    Setmodel(event);
    setCurrentPage(1);
  };

  const defaultImageOne =
    "https://jadgroup.goaspendigital.com/wp-content/uploads/2024/01/Grou-768x433.png";
  const defaultImageTwo =
    "https://jadgroup.goaspendigital.com/wp-content/uploads/2024/01/Group-1000001810-768x422.png";

  const equipment_data_html =
    equipment_list &&
    Array.isArray(equipment_list) &&
    equipment_list.length > 0 ? (
      equipment_list.map((value, index) => {
        return (
          <PartsInventory
            jad_id={value.JAD_ID}
            description={value.Description}
            model={value.Model}
            Manufacturer={value.Manufacturer_Id}
            data={value}
            thumb={defaultImageOne}
            Inspection_Available={value.Is_Inspection_Available}
            vintage={value.Vintage}
            Condition={value.Condition}
            Parts_number={value["Part Number"]}
            Revision={value.Revision}
          />
        );
      })
    ) : (
      <div className="no-result">{noresult}</div>
    );
  const withPagination = totalProducts > 0 && (
    <Pagination
      onPageChange={handlePageChange}
      currentPage={currentPage}
      total={totalProducts}
    />
  );
  return (
    <>
      <div className="banner-image">
        <h1>Parts Inventory</h1>
      </div>
      <div className="filter-header-container">
        <div className="filter-container">
          <SelectedOption
            name={"Manufacturer"}
            values={menufecture}
            searchfunction={(query) => Setmenufecture_fun(query)}
            searchvalue={menufecture_active}
          />


          <SelectedOption
            name={"Model"}
            values={model_list}
            searchfunction={(query) => handleModelChange(query)}
            searchvalue={model}
            type={'single'}
          />

          {/* <Model
            value={model}
            handleModelChange={(query) => handleModelChange(query)}
          /> */}

          <button
            onClick={() => clearFilter()}
            className={
              searchInput == "" && menufecture_active == "" && model == ""
                ? "clear-all-btn d-none"
                : "clear-all-btn"
            }
          >
            {searchfill ? "Clear Search" : "Clear All filter"}
          </button>

          <div className="showing-results">
            {totalProducts > 0 ? (
              totalProducts > 10 ? (
                <h5>
                  Showing{" "}
                  {currentPage === 1
                    ? `1-${Math.min(10, totalProducts)}`
                    : `${(currentPage - 1) * 10 + 1}-${Math.min(
                        currentPage * 10,
                        totalProducts
                      )}`}{" "}
                  of {totalProducts}
                </h5>
              ) : (
                <h5>
                  Showing 1-{totalProducts}{" "}
                  {totalProducts === 1 ? "product" : "products"}
                </h5>
              )
            ) : null}
          </div>

          <Search
            value={searchInput}
            searchfunction={(query) => searchfunction(query)}
            setsearchfill={() => setsearchfill(true)}
            setsearchempty={() => setsearchfill(false)}
          />
        </div>
      </div>

      <div className="table-header ">
        <div className="table-head-2 table-head Revision">
          <h5>Parts</h5>
        </div>
        <div className="table-head-2 table-head description">
          <h5>Description</h5>
        </div>
        <div className="table-head-2 table-head Part_Number">
          <h5>Manufacturer</h5>
        </div>
        <div className="table-head-2 table-head Part_Number">
          <h5>Part Number</h5>
        </div>
        <div className="table-head-3 table-head Revision">
          <h5>Revision</h5>
        </div>

        <div className="table-head-3 table-head Action">
          <h5>Actions</h5>
        </div>
      </div>

      {equipment_data_html}
      {loading && (
        <div
          className="loading-bar-container"
          style={{ height: height + "px" }}
        >
          <div className="loading-bar">Loading...</div>
        </div>
      )}
      {withPagination}
    </>
  );
}

export default Inventorylist;
