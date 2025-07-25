// File: App.tsx

// Import necessary React and React Native components
import React, { useState, useEffect, useRef } from 'react';
import {
  View, // Container for layout
  Text, // For displaying text
  TextInput, // For user input fields
  TouchableOpacity, // For clickable buttons
  KeyboardAvoidingView, // To avoid keyboard covering input fields
  Platform, // To check if the device is iOS or Android
  Image, // To display images
  useColorScheme, // To detect light or dark mode
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // For gradient backgrounds
import CheckBox from '@react-native-community/checkbox'; // For checkbox component
import { styles } from './styles'; // Import styles
import { lightTheme, darkTheme } from './themes.ts'; // Import color themes


// Main login screen component
function LoginScreen() {
  // State to store the mobile number entered by the user
  const [mobile, setMobile] = useState('');

  // State to store the 6-digit OTP as an array of strings
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));

  // State for the resend OTP timer (in seconds)
  const [resendTimer, setResendTimer] = useState<number>(30);

  // State to track if the user wants to remember this device
  const [rememberDevice, setRememberDevice] = useState<boolean>(false);

  // References to each OTP input box, so we can focus the next/previous one
  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Detect if the user is using dark or light mode
  const colorScheme = useColorScheme();
  // Choose the theme based on the color scheme
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  // Effect to handle the countdown for the resend OTP timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Function to handle OTP input changes
  // Moves focus to the next input when a digit is entered
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Function to handle backspace in OTP input
  // Moves focus to the previous input if current is empty
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };


  // The UI for the login screen
  return (
    // KeyboardAvoidingView helps prevent the keyboard from covering inputs
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* App logo image at the top */}
      <Image
        source={require('./assets/hat.png')}
        style={{ width: 180, height: 100, marginTop: 30 }} />

      {/* App title with accent and primary color */}
      <Text style={[styles.heading, { color: theme.accent }]}>UPSC <Text style={{ color: theme.primary }}>PREP</Text></Text>

      {/* Welcome message */}
      <Text style={[styles.subheading, { color: theme.text }]}>Welcome UPSC Aspirant</Text>
      <Text style={[styles.caption, { color: theme.caption }]}>Start your journey to serve the nation</Text>

      {/* Mobile number input section */}
      <Text style={[styles.label, { color: theme.text }]}>Mobile Number</Text>
      <View style={[styles.phoneContainer, { backgroundColor: theme.inputBackground, borderColor: theme.border }]}>
        {/* Country code prefix */}
        <Text style={[styles.prefix, { backgroundColor: theme.prefixBackground, color: theme.prefixTextColor }]}>+91</Text>
        {/* Input for mobile number */}
        <TextInput
          style={[styles.input, { color: theme.text }]}
          keyboardType="number-pad"
          maxLength={10}
          placeholder="Enter your mobile number"
          placeholderTextColor={theme.caption}
          value={mobile}
          onChangeText={setMobile} />
      </View>

      {/* OTP input section */}
      <Text style={[styles.label, { color: theme.text }]}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {/* Render 6 OTP input boxes */}
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => { inputRefs.current[index] = ref; } }
            style={[styles.otpInput, { borderColor: theme.otpBox, color: theme.text }]}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)} />
        ))}
      </View>

      {/* Resend OTP timer or button */}
      {resendTimer > 0 ? (
        <Text style={[styles.resendText, { color: theme.caption }]}>Resend OTP in <Text style={{ color: theme.accent }}>{resendTimer}s</Text></Text>
      ) : (
        <TouchableOpacity onPress={() => setResendTimer(30)}>
          <Text style={[styles.resendActive, { color: theme.primary }]}>Resend OTP</Text>
        </TouchableOpacity>
      )}

      {/* Remember device checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberDevice}
          onValueChange={setRememberDevice}
          tintColors={{ true: theme.primary, false: theme.caption }} />
        <Text style={[styles.checkboxLabel, { color: theme.text }]}>Remember this device</Text>
      </View>

      {/* Login button with gradient background */}
      <TouchableOpacity style={styles.loginButton}>
        <LinearGradient
          colors={theme.buttonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Resend OTP button (always available) */}
      <TouchableOpacity style={[styles.resendButton, { borderColor: theme.text }]} onPress={() => setResendTimer(30)}>
        <Text style={[styles.resendButtonText, { color: theme.caption }]}>Resend OTP</Text>
      </TouchableOpacity>

      {/* Footer with terms and privacy policy links */}
      <Text style={[styles.footer, { color: theme.caption }]}>By continuing, you agree to our{' '}
        <Text style={[styles.link, { color: theme.link }]}>Terms of Service</Text> and {'\n'}
        <Text style={[styles.link, { color: theme.link }]}>Privacy Policy</Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

// Export the LoginScreen component as the default export
export default LoginScreen;