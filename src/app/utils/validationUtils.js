// Validation Utilities for Form Data Brand
// Extracted from main component for reusability and maintainability

// Basic validation rules
export const validationRules = {
  required: (value) => {
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return "Field ini wajib diisi";
    }
    return null;
  },

  email: (value) => {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Format email tidak valid";
    }
    return null;
  },

  phone: (value) => {
    if (!value) return null;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value)) {
      return "Format nomor telepon tidak valid";
    }
    if (value.replace(/\D/g, "").length < 10) {
      return "Nomor telepon minimal 10 digit";
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (!value) return null;
    if (value.length < min) {
      return `Minimal ${min} karakter`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (!value) return null;
    if (value.length > max) {
      return `Maksimal ${max} karakter`;
    }
    return null;
  },

  url: (value) => {
    if (!value) return null;
    try {
      new URL(value);
      return null;
    } catch {
      return "Format URL tidak valid";
    }
  },

  age: (value) => {
    if (!value) return null;
    const age = parseInt(value);
    if (isNaN(age) || age < 0 || age > 150) {
      return "Usia tidak valid";
    }
    return null;
  },

  arrayNotEmpty: (value) => {
    if (!value || !Array.isArray(value) || value.length === 0) {
      return "Setidaknya satu item harus ditambahkan";
    }
    return null;
  },

  socialMedia: (value) => {
    if (!value) return null;
    const errors = {};

    Object.entries(value).forEach(([platform, url]) => {
      if (url) {
        const urlError = validationRules.url(url);
        if (urlError) {
          errors[platform] = urlError;
        }
      }
    });

    return Object.keys(errors).length > 0 ? errors : null;
  },
};

// Field validation configurations
export const fieldValidations = {
  brandName: [validationRules.required, validationRules.minLength(2)],
  slogan: [validationRules.required],
  role: [validationRules.required],
  fullName: [validationRules.required, validationRules.minLength(2)],
  email: [validationRules.required, validationRules.email],
  phone: [validationRules.required, validationRules.phone],

  targetAgeMin: [validationRules.required, validationRules.age],
  targetAgeMax: [validationRules.required, validationRules.age],
  targetGender: [validationRules.required],
  targetLocation: [validationRules.required],

  mainProduct: [validationRules.required],
  productAdvantages: [validationRules.required],

  brandColors: [validationRules.required],
  typography: [validationRules.required],
  visualStyle: [validationRules.required],

  vision: [validationRules.arrayNotEmpty],
  mission: [validationRules.arrayNotEmpty],
  longTermGoal: [validationRules.arrayNotEmpty],

  certifications: [validationRules.arrayNotEmpty],
  customerFeedback: [validationRules.arrayNotEmpty],
  competitors: [validationRules.arrayNotEmpty],
  problemsSolutions: [validationRules.arrayNotEmpty],
};

// Validate single field
export const validateField = (fieldName, value) => {
  const rules = fieldValidations[fieldName];
  if (!rules) return null;

  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }

  return null;
};

// Validate entire form data
export const validateFormData = (formData) => {
  const errors = {};

  // Validate basic fields
  Object.keys(fieldValidations).forEach((fieldName) => {
    const error = validateField(fieldName, formData[fieldName]);
    if (error) {
      errors[fieldName] = error;
    }
  });

  // Custom validations
  if (formData.targetAgeMin && formData.targetAgeMax) {
    const minAge = parseInt(formData.targetAgeMin);
    const maxAge = parseInt(formData.targetAgeMax);

    if (minAge >= maxAge) {
      errors.targetAgeMax = "Usia maksimal harus lebih besar dari usia minimal";
    }
  }

  // Validate social media URLs
  const socialMediaErrors = validationRules.socialMedia(formData.socialMedia);
  if (socialMediaErrors) {
    errors.socialMedia = socialMediaErrors;
  }

  // Validate array items
  const arrayFields = ["vision", "mission", "longTermGoal", "certifications", "customerFeedback", "competitors", "problemsSolutions"];

  arrayFields.forEach((fieldName) => {
    const array = formData[fieldName];
    if (array && Array.isArray(array)) {
      array.forEach((item, index) => {
        if (typeof item === "object" && item !== null) {
          Object.entries(item).forEach(([key, value]) => {
            if (!value || (typeof value === "string" && value.trim() === "")) {
              if (!errors[fieldName]) errors[fieldName] = {};
              if (!errors[fieldName].items) errors[fieldName].items = [];
              if (!errors[fieldName].items[index]) errors[fieldName].items[index] = {};
              errors[fieldName].items[index][key] = "Field ini wajib diisi";
            }
          });
        } else if (typeof item === "string" && item.trim() === "") {
          if (!errors[fieldName]) errors[fieldName] = {};
          if (!errors[fieldName].items) errors[fieldName].items = [];
          errors[fieldName].items[index] = "Field ini wajib diisi";
        }
      });
    }
  });

  return errors;
};

// Check if form is valid
export const isFormValid = (formData) => {
  const errors = validateFormData(formData);
  return Object.keys(errors).length === 0;
};

// Get error message for field
export const getFieldError = (errors, fieldName, itemIndex = null, subField = null) => {
  if (!errors || !errors[fieldName]) return null;

  if (itemIndex !== null && subField !== null) {
    return errors[fieldName].items?.[itemIndex]?.[subField] || null;
  }

  if (itemIndex !== null) {
    return errors[fieldName].items?.[itemIndex] || null;
  }

  return errors[fieldName];
};

// Check if field has error
export const hasError = (errors, fieldName, itemIndex = null, subField = null) => {
  if (!errors || !errors[fieldName]) return false;

  if (itemIndex !== null && subField !== null) {
    return !!errors[fieldName].items?.[itemIndex]?.[subField];
  }

  if (itemIndex !== null) {
    return !!errors[fieldName].items?.[itemIndex];
  }

  return !!errors[fieldName];
};

// Clear field error
export const clearFieldError = (errors, fieldName, itemIndex = null, subField = null) => {
  if (!errors || !errors[fieldName]) return errors;

  const newErrors = { ...errors };

  if (itemIndex !== null && subField !== null) {
    if (newErrors[fieldName].items?.[itemIndex]?.[subField]) {
      delete newErrors[fieldName].items[itemIndex][subField];
      if (Object.keys(newErrors[fieldName].items[itemIndex]).length === 0) {
        delete newErrors[fieldName].items[itemIndex];
      }
    }
  } else if (itemIndex !== null) {
    if (newErrors[fieldName].items?.[itemIndex]) {
      delete newErrors[fieldName].items[itemIndex];
    }
  } else {
    delete newErrors[fieldName];
  }

  return newErrors;
};
