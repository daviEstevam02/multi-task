import swal from "sweetalert2"

interface ToastProps {
    title: string;
    description: string;
    status: "error" | "success" | "warning" | "info" | undefined;
}

function getStatusColor(status?: string) {
    const backgroundStatus: Record<string, string> = {
        error: "#ED1C24",
        success: "#1BB934",
        warning: "#F3B200",
        info:"#0086F3",
        default: "#C2C2C2",
    };

    return backgroundStatus[status!] || backgroundStatus.default;
  }

export const swalToast = ({ title, description, status }: ToastProps) => {
    return swal.fire({
      title: title,
      icon: status,
      text: description || '',
      confirmButtonColor: getStatusColor(status),
    });
  };