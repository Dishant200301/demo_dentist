// Patient Types - Public facing Patient data
export interface PatientFormData {
    name: string;
    phone: string;
    email?: string;
}

export interface PatientValidation {
    isValid: boolean;
    errors: {
        name?: string;
        phone?: string;
        email?: string;
    };
}
