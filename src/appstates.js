import React, { createContext, useContext, useReducer } from 'react';


const AppStateContext = createContext();


const initialState = {
    ActiveMenu: 'Home',
    serviceRequestsData : [
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
    ],

    skyBlueBoxData : [
      {
        topNumber1: "93K_0",
        topNumber2: "DE39700104",
        imageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Men.png",
        name: "Jamal Palmer",
        email: "Jamalpalmer@gmail.com",
        phone: "+5236 3418 1452",
      },
      {
        topNumber1: "98K_0",
        topNumber2: "DE39700104",
        imageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/Men.png",
        name: "Madhav Palmer",
        email: "Madhav232@gmail.com",
        phone: "+9999 3418 1452",
      },
    ],

    machinesData : [
      {
        imageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/demo.png",
        topNumber1: "93K_0",
        topNumber2: "DE39700104",
        manufacture: "Verigy",
        model: "93000",
        serviceTickets: "20",
        cmaStartDate: "01/01/2022",
        cmaBalance: {
          partsCapRemaining: "-2",
          calibrationRemaining: "-2",
          supportHours: "12.5",
          onSiteServiceVisit: "12.5",
        },
      },
      {
        imageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/demo.png",
        topNumber1: "93K_0",
        topNumber2: "DE39700104",
        manufacture: "Verigy",
        model: "93000",
        serviceTickets: "20",
        cmaStartDate: "01/01/2022",
        cmaBalance: {
          partsCapRemaining: "-2",
          calibrationRemaining: "-2",
          supportHours: "12.5",
          onSiteServiceVisit: "12.5",
        },
      },
  
    ],

    serviceRequestsData : [
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
      {
        srNo: "100159",
        description: "P1000 channel Module feilures",
        machineName: "93K_0",
        type: "Part(s) Exchange",
        Time: "08/07/2023 10:36",
        Name: "Jamal Palmer",
        Webpage: "Webpage",
        statusImageUrl:
          "https://jadgroup.goaspendigital.com/wp-content/uploads/elementor/thumbs/inprogress.png",
      },
    ]
    
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_NAV':
      return { ...state, ActiveMenu: action.payload };

    default:
      return state;
  }
};


export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};


export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
