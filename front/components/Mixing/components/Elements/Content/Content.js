import { Box } from "@mui/material";

export default function Content({ percent, functionPercent }) {
  return (
    <div>
      <Box
        className="mixing-block"
        sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
      >
        <Box className="mixing-block__block">
          <input
            className="mixing"
            type="number"
            value={percent}
            onChange={(event) => functionPercent(event.target.value)}
            style={{
              background: "transparent",
              borderTop: "none",
              borderRight: "none",
              color: "white",
            }}
          />
          <div style={{ paddingLeft: 15 }} className="field__element">
            <div className="mixing-percent">%</div>
          </div>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 60,
          }}
          className="address-block"
        >
          <div className="address-block__address">bc1qdeaze2de4gjl4tg9fsp3awd4426x60zjx9s9gy</div>
          <div className="address-block__delay">Задержка: 3 часа</div>
        </div>
      </Box>
    </div>
  );
}
