import React from "react";
import PricingandcalendarYesIllimportunavailabledatesfromanotherwebsiteOne from "pages/PricingandcalendarYesIllimportunavailabledatesfromanotherwebsiteOne";
import PricingandcalendarNoIwontsyncmyavailabilityOne from "pages/PricingandcalendarNoIwontsyncmyavailabilityOne";
import PricingandcalendarPricepernight from "pages/PricingandcalendarPricepernight";
import PricingandcalendarYesIllconnectwithachannelmanager from "pages/PricingandcalendarYesIllconnectwithachannelmanager";
import PricingandcalendarFive from "pages/PricingandcalendarFive";
import PricingandcalendarRateplans from "pages/PricingandcalendarRateplans";
import PricingandcalendarYesTwo from "pages/PricingandcalendarYesTwo";
import PricingandcalendarYes from "pages/PricingandcalendarYes";
import PricingandcalendarNo from "pages/PricingandcalendarNo";
import PhotosImportPhotosAirbnb from "pages/PhotosImportPhotosAirbnb";
import Parkingfree from "pages/Parkingfree";
import Hostprofile from "pages/Hostprofile";
import Rules from "pages/Rules";
import Language from "pages/Language";
import Parkingpaid from "pages/Parkingpaid";
import Parking from "pages/Parking";
import PropertySetupBreakfastDetailsn from "pages/PropertySetupBreakfastDetailsn";
import PropertySetupBreakfastDetailsy from "pages/PropertySetupBreakfastDetailsy";
import PropertySetupBreakfastDetailsOne from "pages/PropertySetupBreakfastDetailsOne";
import PropertySetupAmenities from "pages/PropertySetupAmenities";
import PropertyDetailsBedroomTwoOne from "pages/PropertyDetailsBedroomTwoOne";
import PropertyDetailsOtherSpacesOne from "pages/PropertyDetailsOtherSpacesOne";
import PropertyDetailsLivingRoom from "pages/PropertyDetailsLivingRoom";
import PropertySetupPropertyDetailsOne from "pages/PropertySetupPropertyDetailsOne";
import NameLocation3rdPage from "pages/NameLocation3rdPage";
import NameLocation2ndPage from "pages/NameLocation2ndPage";
import NameLocation1stPage from "pages/NameLocation1stPage";
import PricingandcalendarNoIwontsyncmyavailability from "pages/PricingandcalendarNoIwontsyncmyavailability";
import PropertyDetailsBedroomTwo from "pages/PropertyDetailsBedroomTwo";
import ParkingfreeOne from "pages/ParkingfreeOne";
import PropertySetupBreakfastDetailsnOne from "pages/PropertySetupBreakfastDetailsnOne";
import PropertyDetailsOtherSpaces from "pages/PropertyDetailsOtherSpaces";
import PricingandcalendarYesIllconnectwithachannelmanagerOne from "pages/PricingandcalendarYesIllconnectwithachannelmanagerOne";
import PricingandcalendarFiveOne from "pages/PricingandcalendarFiveOne";
import ParkingOne from "pages/ParkingOne";
import PricingandcalendarRateplansOne from "pages/PricingandcalendarRateplansOne";
import PricingandcalendarPricepernightOne from "pages/PricingandcalendarPricepernightOne";
import PricingandcalendarYesTwoOne from "pages/PricingandcalendarYesTwoOne";
import PricingandcalendarYesOne from "pages/PricingandcalendarYesOne";
import PricingandcalendarNoOne from "pages/PricingandcalendarNoOne";
import PhotosImportPhotosAirbnbOne from "pages/PhotosImportPhotosAirbnbOne";
import PhotosImportPhotosOne from "pages/PhotosImportPhotosOne";
import HostprofileOne from "pages/HostprofileOne";
import RulesOne from "pages/RulesOne";
import LanguageOne from "pages/LanguageOne";
import PropertySetupBreakfastDetails from "pages/PropertySetupBreakfastDetails";
import PropertySetupAmenitiesOne from "pages/PropertySetupAmenitiesOne";
import PropertySetupPropertyDetails from "pages/PropertySetupPropertyDetails";
import NameLocation3rdPageOne from "pages/NameLocation3rdPageOne";
import NameLocation2ndPageOne from "pages/NameLocation2ndPageOne";
import NameLocation1stPageOne from "pages/NameLocation1stPageOne";
import Questionaboutproperty from "pages/Questionaboutproperty";
import Confirmation from "pages/Confirmation";
import Howmuchpropertytolist from "pages/Howmuchpropertytolist";
import Propertycategorypage from "pages/Propertycategorypage";
import Grouphomepage from "pages/Grouphomepage";
import Addproperty from "pages/Addproperty";
import PropertySetupBreakfastDetailsyOne from "pages/PropertySetupBreakfastDetailsyOne";
import ParkingpaidOne from "pages/ParkingpaidOne";
import PropertyDetailsLivingRoomOne from "pages/PropertyDetailsLivingRoomOne";
import PricingandcalendarYesIllimportunavailabledatesfromanotherwebsite from "pages/PricingandcalendarYesIllimportunavailabledatesfromanotherwebsite";
import PhotosImportPhotos from "pages/PhotosImportPhotos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotosImportPhotos />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/pricingandcalendaryesillimportunavailabledatesfromanotherwebsite"
          element={
            <PricingandcalendarYesIllimportunavailabledatesfromanotherwebsite />
          }
        />
        <Route
          path="/propertydetailslivingroomone"
          element={<PropertyDetailsLivingRoomOne />}
        />
        <Route path="/parkingpaidone" element={<ParkingpaidOne />} />
        <Route
          path="/propertysetupbreakfastdetailsyone"
          element={<PropertySetupBreakfastDetailsyOne />}
        />
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/grouphomepage" element={<Grouphomepage />} />
        <Route
          path="/propertycategorypage"
          element={<Propertycategorypage />}
        />
        <Route
          path="/howmuchpropertytolist"
          element={<Howmuchpropertytolist />}
        />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route
          path="/questionaboutproperty"
          element={<Questionaboutproperty />}
        />
        <Route
          path="/namelocation1stpageone"
          element={<NameLocation1stPageOne />}
        />
        <Route
          path="/namelocation2ndpageone"
          element={<NameLocation2ndPageOne />}
        />
        <Route
          path="/namelocation3rdpageone"
          element={<NameLocation3rdPageOne />}
        />
        <Route
          path="/propertysetuppropertydetails"
          element={<PropertySetupPropertyDetails />}
        />
        <Route
          path="/propertysetupamenitiesone"
          element={<PropertySetupAmenitiesOne />}
        />
        <Route
          path="/propertysetupbreakfastdetails"
          element={<PropertySetupBreakfastDetails />}
        />
        <Route path="/languageone" element={<LanguageOne />} />
        <Route path="/rulesone" element={<RulesOne />} />
        <Route path="/hostprofileone" element={<HostprofileOne />} />
        <Route
          path="/photosimportphotosone"
          element={<PhotosImportPhotosOne />}
        />
        <Route
          path="/photosimportphotosairbnbone"
          element={<PhotosImportPhotosAirbnbOne />}
        />
        <Route
          path="/pricingandcalendarnoone"
          element={<PricingandcalendarNoOne />}
        />
        <Route
          path="/pricingandcalendaryesone"
          element={<PricingandcalendarYesOne />}
        />
        <Route
          path="/pricingandcalendaryestwoone"
          element={<PricingandcalendarYesTwoOne />}
        />
        <Route
          path="/pricingandcalendarpricepernightone"
          element={<PricingandcalendarPricepernightOne />}
        />
        <Route
          path="/pricingandcalendarrateplansone"
          element={<PricingandcalendarRateplansOne />}
        />
        <Route path="/parkingone" element={<ParkingOne />} />
        <Route
          path="/pricingandcalendarfiveone"
          element={<PricingandcalendarFiveOne />}
        />
        <Route
          path="/pricingandcalendaryesillconnectwithachannelmanagerone"
          element={<PricingandcalendarYesIllconnectwithachannelmanagerOne />}
        />
        <Route
          path="/propertydetailsotherspaces"
          element={<PropertyDetailsOtherSpaces />}
        />
        <Route
          path="/propertysetupbreakfastdetailsnone"
          element={<PropertySetupBreakfastDetailsnOne />}
        />
        <Route path="/parkingfreeone" element={<ParkingfreeOne />} />
        <Route
          path="/propertydetailsbedroomtwo"
          element={<PropertyDetailsBedroomTwo />}
        />
        <Route
          path="/pricingandcalendarnoiwontsyncmyavailability"
          element={<PricingandcalendarNoIwontsyncmyavailability />}
        />
        <Route path="/namelocation1stpage" element={<NameLocation1stPage />} />
        <Route path="/namelocation2ndpage" element={<NameLocation2ndPage />} />
        <Route path="/namelocation3rdpage" element={<NameLocation3rdPage />} />
        <Route
          path="/propertysetuppropertydetailsone"
          element={<PropertySetupPropertyDetailsOne />}
        />
        <Route
          path="/propertydetailslivingroom"
          element={<PropertyDetailsLivingRoom />}
        />
        <Route
          path="/propertydetailsotherspacesone"
          element={<PropertyDetailsOtherSpacesOne />}
        />
        <Route
          path="/propertydetailsbedroomtwoone"
          element={<PropertyDetailsBedroomTwoOne />}
        />
        <Route
          path="/propertysetupamenities"
          element={<PropertySetupAmenities />}
        />
        <Route
          path="/propertysetupbreakfastdetailsone"
          element={<PropertySetupBreakfastDetailsOne />}
        />
        <Route
          path="/propertysetupbreakfastdetailsy"
          element={<PropertySetupBreakfastDetailsy />}
        />
        <Route
          path="/propertysetupbreakfastdetailsn"
          element={<PropertySetupBreakfastDetailsn />}
        />
        <Route path="/parking" element={<Parking />} />
        <Route path="/parkingpaid" element={<Parkingpaid />} />
        <Route path="/language" element={<Language />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/hostprofile" element={<Hostprofile />} />
        <Route path="/parkingfree" element={<Parkingfree />} />
        <Route
          path="/photosimportphotosairbnb"
          element={<PhotosImportPhotosAirbnb />}
        />
        <Route
          path="/pricingandcalendarno"
          element={<PricingandcalendarNo />}
        />
        <Route
          path="/pricingandcalendaryes"
          element={<PricingandcalendarYes />}
        />
        <Route
          path="/pricingandcalendaryestwo"
          element={<PricingandcalendarYesTwo />}
        />
        <Route
          path="/pricingandcalendarrateplans"
          element={<PricingandcalendarRateplans />}
        />
        <Route
          path="/pricingandcalendarfive"
          element={<PricingandcalendarFive />}
        />
        <Route
          path="/pricingandcalendaryesillconnectwithachannelmanager"
          element={<PricingandcalendarYesIllconnectwithachannelmanager />}
        />
        <Route
          path="/pricingandcalendarpricepernight"
          element={<PricingandcalendarPricepernight />}
        />
        <Route
          path="/pricingandcalendarnoiwontsyncmyavailabilityone"
          element={<PricingandcalendarNoIwontsyncmyavailabilityOne />}
        />
        <Route
          path="/pricingandcalendaryesillimportunavailabledatesfromanotherwebsiteone"
          element={
            <PricingandcalendarYesIllimportunavailabledatesfromanotherwebsiteOne />
          }
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
