type Sizes = "small" | "medium" | "large";

type Props = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClose: () => void;
  show: boolean;
};

const SIZE_TO_PX_MAP: Record<Sizes, number> = {
  small: 200,
  medium: 400,
  large: 800,
};

export function MyModal({
  onClose,
  show,
  size = "medium",
  children,
}: Props): JSX.Element | null {
  if (!show) {
    return null;
  }

  return (
    <dialog
      open
      style={{
        position: "absolute",
        zIndex: 1,
        left: "50%",
        top: "50%",
        overflow: "auto",
        transform: "translate(-50%, -50%)",
        margin: 0,
      }}
    >
      <div
        style={{
          width: SIZE_TO_PX_MAP[size],
          height: SIZE_TO_PX_MAP[size],
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex" }}>
            <div style={{ justifyContent: "end" }}>
              <button onClick={onClose}>x</button>
            </div>
          </div>
          Size: {size}
          {children}
        </div>
      </div>
    </dialog>
  );
}

//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
