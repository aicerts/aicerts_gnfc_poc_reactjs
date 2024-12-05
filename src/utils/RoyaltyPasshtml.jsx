import React from "react";
import { formatDate } from "./formateDate";

const RoyaltyPassHtml = ({ royaltyPass,barcodeSrc }) => {
  return (
    <div id="royalty-pass-print" style={{display:"flex", flexDirection:"column" }}>
      <div style={{ display:"flex" , justifyContent:"center"}}>
      <table style={{ fontFamily: "Arial", fontSize: "16px"}}>
      <div style={{  width:"100%"  }} >
      <tbody   >
          <tr  >
            <td>
              <img
                src={royaltyPass.qrData}
                alt="QR Code"
                style={{ width: "150px", height: "150px", marginRight:"30px" }}
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
                      Royalty Pass - Geology And Mining
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      Royalty Pass No.
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
                      {royaltyPass.royaltyPassNo}
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
                      {formatDate()}
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
      </div>
      </table>
      </div>
      <div style={{display:"flex" , justifyContent:"center"}}>
        <table
          style={{
            fontFamily: "Arial",
            fontSize: "16px",
            border: "1px solid #000",
            width: "900px",
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
                  height: "48px",
                }}
              >
                <b>Lease Holder :</b>
              </td>
              <td
                colSpan="3"
                style={{ borderBottom: "1px solid #000" }}
              >
                {royaltyPass.leaserId}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                <b>Issue Date & Time :</b>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                {formatDate(royaltyPass.issuanceDate)}
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
                {royaltyPass.SSPNumber}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                <b>Village/ Survey No :</b>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                {royaltyPass.village + "/ " + (royaltyPass.surveyNo || "-")}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                <b>Lease Valid Up To Date :</b>
              </td>
              <td style={{ borderBottom: "1px solid #000" }}>
                {formatDate(royaltyPass.leaseValidUpto).slice(0, -8)}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                <b>District :</b>
              </td>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                {royaltyPass.district}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #000",
                  borderRight: "1px solid #000",
                }}
              >
                <b>Taluka :</b>
              </td>
              <td style={{ borderBottom: "1px solid #000" }}>
                {royaltyPass.taluke}
              </td>
            </tr>
            <tr>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Mineral Name (Grade):</b>
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            {`${royaltyPass.mineralName} (${royaltyPass.mineralGrade})`}
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Initial Quantity (MT):</b>
          </td>
          <td style={{ borderBottom: "1px solid #000" }}>
            {royaltyPass.initialQuantatity}
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Journey Start Date :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            {formatDate(royaltyPass.journeyStartDate)}
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Journey End Date :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000" }}>
            {formatDate(royaltyPass.journeyEndDate)}
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Distance :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            {royaltyPass.distance}
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Duration :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000" }}>
            {`${royaltyPass.duration}(s) 0 Hour(s) 0 Minute(s)`}
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Driver Name :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            {royaltyPass.driverName}
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Driver's Licence No :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000" }}>
            {royaltyPass.driverLiceneceNo}
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Driver Mobile Number :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            {royaltyPass.driverMobileNumber || "N/A"}
          </td>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Vehicle Type / Number :</b>
          </td>
          <td style={{ borderBottom: "1px solid #000" }}>
            {`${royaltyPass.vehicleType} / (${royaltyPass.vehicleNumber})`}
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            <b>Weighbridge Name :</b>
          </td>
          <td colSpan="2" style={{ borderBottom: "1px solid #000", borderRight: "1px solid #000" }}>
            {royaltyPass.weightBridgeName}
          </td>
        </tr>
        <tr>
          <td style={{ borderRight: "1px solid #000" }}>
            <b>Destination / Address :</b>
          </td>
          <td colSpan="2" style={{ borderRight: "1px solid #000" }}>
            {`${royaltyPass.destination} / (${royaltyPass.address})`}
          </td>
        </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoyaltyPassHtml;
