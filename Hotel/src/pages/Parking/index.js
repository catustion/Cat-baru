import React from "react";
import { Column, Row, Text, Img, Line, Input, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { SelectBoxPark } from "components/SelectBox park";
import { SelectPriv } from "components/SelectPriv";
import { SelectSite } from "components/SelectSite";
import { SelectRSVP } from "components/SelectRSVP";
import { SelectBrk } from "components/SelectBrk";
import { SelectBrkT } from "components/SelectBrkT";
import { SelectBoxselect } from "components/SelectBox select";

const ParkingPage = () => {
  const navigate = useNavigate();

  function handleNavigate76() {
    navigate("/PropertySetupBreakfastDetails");
  }
  function handleNavigate77() {
    navigate("/Language");
  }

  return (
    <>
    <Column className="bg-gray_100 font-ptsans items-center justify-start 2xl:mb-[100px] mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
    <Column className="items-center justify-start w-[100%]">
      <Header className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Row className="bg-gray_50 items-left justify-evenly  w-[100%]">
            <Row className="bg-gray_50 items-center justify-center w-[19%]">
              <Text className="Step1" variant="body4">
                Name and location
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="checkmark"
                alt="checkmark"
              />
            </Row>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Property Setup
              </Text>
              <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-green_201 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-light_blue_800 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
                <div className="bg-gray_502 lg:h-[3px] xl:h-[4px] 2xl:h-[5px] 3xl:h-[6px] shadow-bs3 w-[13%]"></div>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Photos
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center pt-[4px] px-[4px] w-[19%]">
              <Text className="Step2 mb-2.5" variant="body4">
                Pricing and Calendar
              </Text>
            </Column>
        </Row>
        <Line className="bg-gray_700_33 h-[0.5px] w-[100%]" />
            <Text className=" xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-[25px] font-bold text-black_900 w-[auto]">
              Facilities & services
            </Text>
            <Text className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[8px] 3xl:mt-[57px] text-[14px] text-black_900 w-[auto]">
              Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.
            </Text>

            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[25px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[100%]"
                  >
                    Parking
                  </Text>
                  <Column className="mb-2 item-start bg-[#E6E6E6] lg:p-[10px] xl:p-[17px] 2xl:p-[8px] 3xl:p-[24px] 2xl:ml-[-23px] w-[132%]">
                    <Text
                      className ="text-[12px]"
                    >
                    This information is especially important for those travelling to your accommodation by car.
                    </Text>
                  </Column>

                  <Text
                    className=" text-black_900 mb-2 text-[14px] w-[100%]"
                  >
                    Is parking available to guests?
                  </Text> 
                  
                  <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] w-[195%]">
                  <SelectBoxPark
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[190%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="No"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectBoxPark>
                  
                  <SelectPriv
                  className="ml-4 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[90%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="Public"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectPriv>

                  <SelectSite
                  className="ml-4 font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[90%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="On site"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectSite>
                  </Row>

                  <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] w-[195%]">
                  <Text
                    className="mt-2 text-black_900 mb-2 text-[14px] w-[107%]"
                  >
                    Do guests need to reserve a parking space?
                  </Text> 

                  <Text
                    className="mt-2 text-black_900 mb-2 text-[14px] w-[105%]"
                  >
                    Price for parking (per day)
                  </Text> 
                  </Row>
                  
                  <Row className="items-left justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[3px] 3xl:mt-[9px] w-[195%]">
                  <SelectRSVP
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[180%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="No reservation needed"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectRSVP>

                    <div class="flex ml-4 w-[190%]">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-[#E6E6E6] border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        MYR
                      </span>
                      <input type="number" 
                      id="website-admin" 
                      class="p-1.5 px-2 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="0"/>
                    </div>
                  </Row>
                  
                </Column>
              </Column>
            </Column>

            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[100%]"
                  >
                    Breakfast
                  </Text>
                  
                  <Text
                    className=" text-black_900 mb-2 text-[14px] w-[100%]"
                  >
                    Is breakfast available to guests?
                  </Text>
                  <SelectBrk
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[100%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="No"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectBrk>

                  <Text
                    className="mt-4 text-black_900 mb-2 text-[14px] w-[100%]"
                  >
                    Price for breakfast (per person, per day including all fees and taxes)
                  </Text>

                  <div class="flex w-[100%]">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-[#E6E6E6] border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        MYR
                      </span>
                      <input type="number" 
                      id="website-admin" 
                      class="p-1.5 px-2 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="0"/>
                    </div>

                    <Text
                    className="mt-4 text-black_900 mb-2 text-[14px] w-[100%]"
                  >
                    What kind of breakfast is available?
                  </Text>
                  <SelectBrkT
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[100%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="Please select"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectBrkT>
                </Column>
              </Column>
            </Column>

            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[100%]"
                  >
                    Languages spoken
                  </Text>
                  <Column className="mb-2 item-start bg-[#E6E6E6] lg:p-[10px] xl:p-[17px] 2xl:p-[8px] 3xl:p-[24px] 2xl:ml-[-23px] w-[65%]">
                    <Text
                      className ="text-[12px]"
                    >
                    What languages do you or your staff speak?
                    </Text>
                  </Column>
                  <SelectBoxselect
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[100%]"
                          placeholderClassName="text-black_900"
                          name="park"
                          placeholder="Please select"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_5X9.svg"
                              className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder2">
                  </SelectBoxselect>
                </Column>
              </Column>
            </Column>
                
            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[50%]">
                  <Text
                    className=" text-black_900 mb-2 text-[20px] w-[150%]"
                  >
                    Facilities that are popular with guests
                  </Text>
                  <Column className="mb-2 item-start bg-[#E6E6E6] lg:p-[10px] xl:p-[17px] 2xl:p-[8px] 3xl:p-[24px] 2xl:ml-[-23px] w-[115%]">
                    <Text
                      className ="text-[12px]"
                    >
                    Guests look for these facilities the most when they’re searching for properties.
                    </Text>
                  </Column>
                  <Column>
                      <div class="grid grid-cols-2 gap-4 mt-5 w-[200%]">
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center 2xl:ml-[8px] text-[14px]" for="flexCheckDefault">Free Wifi</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Non-smoking rooms</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Restaurant</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Airport shuttle</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Room service</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Family rooms</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Bar</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Spa and wellness centre</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">24-hour front desk</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Hot tub/Jacuzzi</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Sauna</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Air-conditioning</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Fitness centre</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Water park</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Garden</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Swimming pool</label>
                        </div>
                        <div class="item start form-check mb-2">
                          <input class="w-4 h-4 text-blue-600 bg-white rounded border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label center ml-[8px] text-[14px]" for="flexCheckDefault">Terrace</label>
                        </div>
                    </div>
                  </Column>
                </Column>
              </Column>
            </Column>

            <Row className="mb-14 items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[10px] 3xl:mt-[44px] w-[51%]">
              <Button
                className="item-start font-bold bg-sky-700 hover:bg-indigo_901 lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[200%]"
                variant="OutlineLightblue8001_2"
                onClick={handleNavigate77}
              >
                Continue
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ParkingPage;