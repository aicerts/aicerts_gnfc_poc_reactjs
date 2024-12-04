import React from "react";

const formatDate = (date) => {
  if (!date) return "-";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

const DeliveryPassHtml = ({ deliveryChallan, barcodeSrc }) => {
  return (
    <div id="delivery-pass-print" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <table
        style={{
          fontFamily: "Arial",
          fontSize: "16px",
          borderSpacing: "40px",
          marginBottom: "0px",
        }}
      >
        <tbody>
          <tr>
            <td>
              <img
                src={deliveryChallan.qrData}
                alt="QR Code"
                style={{ width: "150px", height: "150px" }}
              />
            </td>
            <td style={{ width: "700px" }}>
              <table
                style={{
                  fontFamily: "Arial",
                  fontSize: "16px",
                  border: "1px solid #000",
                  width: "700px",
                  height: "130px",
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000",
                      }}
                    >
                      Geology And Mining (Gujarat)
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      Delivery Challan Code.
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                        borderRight: "1px solid #000",
                      }}
                    >
                      Copy For: Vehicle Driver
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      {deliveryChallan.deliveryNo}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        textAlign: "center",
                        borderRight: "1px solid #000",
                      }}
                    >
                      Issue - Print 1<br />
                      Issue On: {formatDate(deliveryChallan.issuanceDate)}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <img
                        src={barcodeSrc}
                        alt="Barcode"
                        style={{ width: "200px", height: "45px" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        style={{
          fontFamily: "Arial",
          fontSize: "16px",
          border: "1px solid #000",
          width: "880px",
          borderCollapse: "collapse",
          margin: "auto",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Tin No. & Time :</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {deliveryChallan.tinNo || "-"}
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Delivery Challan No :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {deliveryChallan.deliveryNo}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Survey No :</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {deliveryChallan.surveyNo}
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Stockist Reg. No :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {deliveryChallan.buyerId}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
                height: "48px",
              }}
            >
              <b>Stockist Holder :</b>
            </td>
            <td
              colSpan="3"
              style={{ borderBottom: "1px solid #000", textAlign: "left" }}
            >
              {deliveryChallan.buyerName}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Village / Pin Code:</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {deliveryChallan.village} / {deliveryChallan.pincode}
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>SSP Number :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {deliveryChallan.SSPNumber}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Purchaser :</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {deliveryChallan.purchaser || "Rameshbhai Doshi"}
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Vehicle Type/ No :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {deliveryChallan.vehicleType} / {deliveryChallan.vehicleNumber}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Mineral Name (Grade):</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {deliveryChallan.mineralName} ({deliveryChallan.mineralGrade})
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>District / Taluka :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {deliveryChallan.district} / {deliveryChallan.taluke}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Initial Quantity(MT):</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {deliveryChallan.initialQuantatity}
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>T.Mode / Distance :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {deliveryChallan.transportationMode || "-"} /{" "}
              {deliveryChallan.transportationDistance || "-"}
            </td>
          </tr>
          <tr>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Journey Start Date :</b>
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              {formatDate(deliveryChallan.journeyStartDate)}
            </td>
            <td
              style={{
                borderBottom: "1px solid #000",
                borderRight: "1px solid #000",
              }}
            >
              <b>Journey End Date :</b>
            </td>
            <td style={{ borderBottom: "1px solid #000" }}>
              {formatDate(deliveryChallan.journeyEndDate)}
            </td>
          </tr>
          <tr>
          <td style={{ borderRight: "1px solid #000000" }}>
              <b>Driver Name :</b>
            </td>
            <td style={{ borderRight: "1px solid #000000" }}>
              {deliveryChallan.driverName}
            </td>
            <td style={{ borderRight: "1px solid #000000" }}>
              <b>Driver's Licence No :</b>
            </td>
            <td>{deliveryChallan.driverLiceneceNo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryPassHtml;
