import { CircularProgress } from "@mui/material";
import "./KusaLoadingSpinner.css"

interface KusaSpinnerProps {
    loading: boolean;
}

export const KusaLoadingSpinner: React.FC<KusaSpinnerProps> = ({ loading }) => {
    return (
        <>
            {!!loading && (
                <>
                    <div className="overlay" />
                    <CircularProgress
                        size="10rem"
                        sx={{
                            position: "fixed",
                            top: "25%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                        color="success"
                    />
                </>
            )}
        </>
    );
};
