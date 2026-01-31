// Custom Hook for Form State Management
// Extracted from main component for reusability and maintainability

import { useState, useCallback } from 'react';

// Initial form data structure
export const initialFormData = {
  // Identity
  brandName: '',
  slogan: '',
  role: '',
  fullName: '',
  email: '',
  phone: '',
  socialMedia: {
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    tiktok: '',
    youtube: ''
  },
  
  // Vision & Mission
  vision: [{ title: '', description: '' }],
  mission: [{ title: '', description: '' }],
  longTermGoal: [{ title: '', description: '' }],
  
  // Target Audience
  targetAgeMin: '18',
  targetAgeMax: '25',
  targetGender: '',
  targetLocation: '',
  targetOccupation: '',
  targetIncome: '',
  targetEducation: '',
  targetInterests: [],
  
  // Product & Service
  mainProduct: '',
  productAdvantages: '',
  certifications: [''],
  
  // Visual Identity
  brandColors: '',
  typography: '',
  visualStyle: '',
  
  // Customer Experience
  customerFeedback: [{ customer: '', feedback: '' }],
  
  // Competitor Analysis
  competitors: [{ name: '', strength: '', weakness: '' }],
  
  // Problems & Solutions
  problemsSolutions: [{ problem: '', solution: '' }]
};

// Custom hook for form state management
export const useFormState = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
  }, []);

  // Update single field value
  const updateField = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field when value changes
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  // Update nested object field
  const updateNestedField = useCallback((parentField, childField, value) => {
    setFormData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField],
        [childField]: value
      }
    }));
    
    // Clear nested error
    if (errors[parentField]?.[childField]) {
      setErrors(prev => ({
        ...prev,
        [parentField]: {
          ...prev[parentField],
          [childField]: undefined
        }
      }));
    }
  }, [errors]);

  // Update array item
  const updateArrayItem = useCallback((field, index, value) => {
    setFormData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return {
        ...prev,
        [field]: newArray
      };
    });
    
    // Clear array item error
    if (errors[field]?.items?.[index]) {
      setErrors(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          items: prev[field].items.filter((_, i) => i !== index)
        }
      }));
    }
  }, [errors]);

  // Add new item to array
  const addArrayItem = useCallback((field, newItem = null) => {
    setFormData(prev => {
      const currentArray = prev[field];
      let itemToAdd;
      
      // Define default items based on field type
      switch (field) {
        case 'vision':
        case 'mission':
        case 'longTermGoal':
          itemToAdd = newItem || { title: '', description: '' };
          break;
        case 'certifications':
          itemToAdd = newItem || '';
          break;
        case 'customerFeedback':
          itemToAdd = newItem || { customer: '', feedback: '' };
          break;
        case 'competitors':
          itemToAdd = newItem || { name: '', strength: '', weakness: '' };
          break;
        case 'problemsSolutions':
          itemToAdd = newItem || { problem: '', solution: '' };
          break;
        default:
          itemToAdd = newItem || '';
      }
      
      return {
        ...prev,
        [field]: [...currentArray, itemToAdd]
      };
    });
  }, []);

  // Remove item from array
  const removeArrayItem = useCallback((field, index) => {
    setFormData(prev => {
      const newArray = prev[field].filter((_, i) => i !== index);
      return {
        ...prev,
        [field]: newArray
      };
    });
    
    // Clear error for removed item
    if (errors[field]?.items?.[index]) {
      setErrors(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          items: prev[field].items.filter((_, i) => i !== index)
        }
      }));
    }
  }, [errors]);

  // Mark field as touched
  const touchField = useCallback((field, itemIndex = null, subField = null) => {
    if (itemIndex !== null && subField !== null) {
      setTouched(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          items: {
            ...prev[field]?.items,
            [itemIndex]: {
              ...prev[field]?.items?.[itemIndex],
              [subField]: true
            }
          }
        }
      }));
    } else if (itemIndex !== null) {
      setTouched(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          items: {
            ...prev[field]?.items,
            [itemIndex]: true
          }
        }
      }));
    } else {
      setTouched(prev => ({
        ...prev,
        [field]: true
      }));
    }
  }, []);

  // Check if field has error and is touched
  const hasError = useCallback((field, itemIndex = null, subField = null) => {
    if (!errors[field]) return false;
    
    if (itemIndex !== null && subField !== null) {
      return errors[field].items?.[itemIndex]?.[subField] && 
             touched[field]?.items?.[itemIndex]?.[subField];
    }
    
    if (itemIndex !== null) {
      return errors[field].items?.[itemIndex] && 
             touched[field]?.items?.[itemIndex];
    }
    
    return errors[field] && touched[field];
  }, [errors, touched]);

  // Get error message for field
  const getError = useCallback((field, itemIndex = null, subField = null) => {
    if (!errors[field]) return null;
    
    if (itemIndex !== null && subField !== null) {
      return errors[field].items?.[itemIndex]?.[subField] || null;
    }
    
    if (itemIndex !== null) {
      return errors[field].items?.[itemIndex] || null;
    }
    
    return errors[field] || null;
  }, [errors]);

  // Set errors manually
  const setErrorsState = useCallback((newErrors) => {
    setErrors(newErrors);
  }, []);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  // Clear specific field error
  const clearFieldError = useCallback((field, itemIndex = null, subField = null) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      
      if (itemIndex !== null && subField !== null) {
        if (newErrors[field]?.items?.[itemIndex]?.[subField]) {
          delete newErrors[field].items[itemIndex][subField];
          if (Object.keys(newErrors[field].items[index]).length === 0) {
            delete newErrors[field].items[index];
          }
        }
      } else if (itemIndex !== null) {
        if (newErrors[field]?.items?.[itemIndex]) {
          delete newErrors[field].items[index];
        }
      } else {
        delete newErrors[field];
      }
      
      return newErrors;
    });
  }, []);

  // Validate form data
  const validateForm = useCallback((validationFunction) => {
    const newErrors = validationFunction(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Get form data for submission
  const getFormData = useCallback(() => {
    return { ...formData };
  }, [formData]);

  // Set form data (useful for loading saved data)
  const setFormDataState = useCallback((newData) => {
    setFormData(newData);
  }, []);

  return {
    // State
    formData,
    errors,
    touched,
    
    // Actions
    updateField,
    updateNestedField,
    updateArrayItem,
    addArrayItem,
    removeArrayItem,
    touchField,
    setErrorsState,
    clearErrors,
    clearFieldError,
    resetForm,
    validateForm,
    
    // Getters
    hasError,
    getError,
    getFormData,
    setFormDataState
  };
};
