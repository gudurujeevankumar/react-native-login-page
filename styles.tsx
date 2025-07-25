//style.tsx

// Import StyleSheet from react-native to create style objects
import { StyleSheet } from 'react-native';

// This object contains all the styles used throughout the app
export const styles = StyleSheet.create({
  // Main container for screens, centers content and adds padding
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
  },
  // Large bold heading text
  heading: {
    fontSize: 40,
    fontWeight: '900',
    color: '#F59E0C',
  },
  // Special colored text for emphasis
  prepText: {
    color: '#3D71F5',
  },
  // Subheading text, slightly smaller than heading
  subheading: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 20,
  },
  // Small caption text, usually for hints or extra info
  caption: {
    fontSize: 10,
    color: 'black',
    marginBottom: 60,
  },
  // Label for form fields
  label: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: '700',
  },
  // Container for phone input, arranges prefix and input in a row
  phoneContainer: {
    backgroundColor: '#f9fafbff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
  },
  // Style for the country code prefix in phone input
  prefix: {
    borderWidth: 0,
    borderTopLeftRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    backgroundColor: '#909090ff',
    height: '100%',
    width: '15%',
    fontSize: 17,
    fontWeight: '900',
    marginRight: 8,
    marginLeft: -10,
    paddingTop: 10,
    paddingLeft: 10,
    color: 'white',
  },
  // Style for the main text input field
  input: {
    flex: 1,
    height: '100%',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 19,
    color: '#0d0d0dff',
    marginLeft: 8
  },
  // Container for OTP input boxes, arranges them in a row
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  // Style for each OTP input box
  otpInput: {
    borderWidth: 1,
    borderRadius: 8,
    width: 45,
    height: 45,
    textAlign: 'center',
    fontSize: 18,
  },
  // Style for the 'Resend OTP' text when inactive
  resendText: {
    marginBottom: 26,
    color: '#666',
  },
  // Style for the 'Resend OTP' text when active/clickable
  resendActive: {
    color: '#2980b9',
    marginBottom: 46,
    fontWeight: '600',
  },
  // Container for checkbox and its label, arranges them in a row
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  // Style for the label next to the checkbox
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '700'
  },
  // Container for the login button, makes it rounded and full width
  loginButton: {
    width: '100%',
    borderRadius: 30,
    marginBottom: 30,
    overflow: 'hidden',
  },

  // Style for a button with gradient background
  gradientButton: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  // Style for the text inside the login button
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Style for the resend button (bordered button)
  resendButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  // Style for the text inside the resend button
  resendButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  // Footer text at the bottom of the screen
  footer: {
    fontSize: 12,
    color: '#777',
    marginTop: 40,
    textAlign: 'center',
  },
  // Style for clickable links
  link: {
    color: '#2980b9',
    fontWeight: '600',
  },
});
