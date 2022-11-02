import React from "react";

import { Column, Text, Row, Stack, Img, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PropertycategorypagePage = () => {
  const navigate = useNavigate();

  function handleNavigate58() {
    navigate("/howmuchpropertytolist");
  }
  function handleNavigate73() {
    navigate("/howmuchpropertytolist");
  }
  function handleNavigate74() {
    navigate("/howmuchpropertytolist");
  }
  function handleNavigate75() {
    navigate("/howmuchpropertytolist");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[364px] xl:pb-[455px] 2xl:pb-[512px] 3xl:pb-[614px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="font-roboto justify-start xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[60%]">
            <Text className="Box1" as="h6" variant="h6">
              List your property on HalalHoliday.com and start welcoming guests
              in no time!{" "}
            </Text>
            <Text
              className="font-light lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] text-black_900 w-[auto]"
              variant="body2"
            >
              To get started , choose the type of property you want to list in
              HalalHoliday.com
            </Text>
            <Row className="font-ptsans items-end justify-between lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[98%]">
              <Stack className="lg:h-[172px] xl:h-[215px] 2xl:h-[242px] 3xl:h-[290px] mb-[1px] w-[24%]">
                <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs6 w-[100%]">
                  <Column className="font-ptsans items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[31%]">
                    <Img
                      src="images/img_volume.svg"
                      className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      alt="volume"
                    />
                    <Text
                      className="font-bold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Apartment
                    </Text>
                  </Column>
                  <Text
                    className="font-ptsans leading-[normal] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic text-black_900 text-center w-[87%]"
                    variant="body7"
                  >
                    Furnished and self-catering
                    <br />
                    accomodation, where guests rent the <br />
                    entire place.
                  </Text>
                  <Button
                    className="common-pointer font-bold font-inter mb-[4px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                    onClick={handleNavigate74}
                    shape="RoundedBorder2"
                    size="md"
                    variant="FillLightblue800"
                  >
                    List your property
                  </Button>
                </Column>
                <Button
                  className="absolute flex items-center justify-center text-center w-[50%]"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="mr-[1px] text-center right-[1%] absolute lg:w-[14px] lg:h-[15px] xl:w-[17px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder2"
                  size="sm"
                  variant="FillGreen900"
                >
                  <div className="bg-transparent font-bold inset-x-[0] mx-[auto] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] top-[0]">
                    Quick start
                  </div>
                </Button>
              </Stack>
              <Column className="bg-white_A700 items-center justify-end mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs6 w-[24%]">
                <Column className="font-ptsans items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[25%]">
                  <Button
                    className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center w-[100%]"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_home.svg"
                      className="flex items-center justify-center lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px]"
                      alt="home"
                    />
                  </Button>
                  <Text
                    className="font-bold 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-black_900 w-[auto]"
                    variant="body6"
                  >
                    Homes
                  </Text>
                </Column>
                <Text
                  className="font-ptsans leading-[normal] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic text-black_900 text-center w-[82%]"
                  variant="body7"
                >
                  Properties like apartments, holiday
                  <br />
                  homes, villas, etc.
                </Text>
                <Button
                  className="common-pointer font-bold font-inter mb-[3px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  onClick={handleNavigate75}
                  shape="RoundedBorder2"
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
              <Column className="bg-white_A700 items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs6 w-[24%]">
                <Img
                  src="images/img_user_45X45.svg"
                  className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  alt="user One"
                />
                <Text
                  className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr"
                  variant="body6"
                >
                  Hotel, B&Bs, and more
                </Text>
                <Text
                  className="font-ptsans leading-[normal] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[81%]"
                  variant="body7"
                >
                  Properties like hotels, B&Bs, guest
                  <br />
                  houses, hostels, aparthotels, etc.
                </Text>
                <Button
                  className="common-pointer font-bold font-inter mb-[3px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  onClick={handleNavigate73}
                  shape="RoundedBorder2"
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
              <Column className="bg-white_A700 items-center justify-end mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs6 w-[24%]">
                <Stack className="bg-white_A700 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                  <Img
                    src="images/img_vector_45X45.svg"
                    className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    alt="Vector"
                  />
                </Stack>
                <Text
                  className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Whattypeofbr"
                  variant="body6"
                >
                  Alternative places
                </Text>
                <Text
                  className="font-ptsans leading-[normal] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-black_900 text-center w-[75%]"
                  variant="body7"
                >
                  Properties like boats, campsites, <br />
                  luxury tents, etc.
                </Text>
                <Button
                  className="common-pointer font-bold font-inter mb-[3px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  onClick={handleNavigate58}
                  shape="RoundedBorder2"
                  size="md"
                  variant="FillLightblue800"
                >
                  List your property
                </Button>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertycategorypagePage;
