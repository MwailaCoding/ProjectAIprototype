# Voice Assistant Troubleshooting Guide

## Common Issues & Solutions

### 1. **404 Error When Opening Voice Assistant**

**Problem:** Console shows 404 error when clicking the microphone

**Solutions:**
- ✅ **Use HTTPS**: Voice APIs require secure connection (localhost is OK)
- ✅ **Allow Microphone Permission**: Check browser settings
- ✅ **Supported Browser**: Use Chrome, Edge, or Safari (Firefox has limited support)
- ✅ **Restart Browser**: Sometimes the speech API needs a fresh start

### 2. **Microphone Not Working**

**Symptoms:**
- No "Listening..." indicator appears
- Microphone button doesn't respond
- Red error message appears

**Solutions:**
```javascript
// Check if your browser supports Speech Recognition
1. Open browser console (F12)
2. Type: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
3. Should return: true

// If false, you need:
- Chrome (recommended)
- Edge 
- Safari (macOS/iOS)
- Firefox (limited support)
```

### 3. **No Live Transcript Appearing**

**Problem:** You speak but words don't appear in real-time

**Solutions:**
- ✅ Click the microphone button first
- ✅ Ensure microphone permission is granted
- ✅ Check if "Listening..." indicator appears
- ✅ Speak clearly and wait 1-2 seconds

### 4. **"Speech recognition not supported" Error**

**Causes:**
- Wrong browser (Firefox has issues)
- HTTP instead of HTTPS (works on localhost though)
- Browser version too old

**Solution:**
- Use Chrome or Edge
- Ensure you're on HTTP or HTTPS (not file://)
- Update your browser

### 5. **Voice Commands Not Executing**

**Problem:** Words appear but AI doesn't respond

**Solutions:**
- Wait for "Listening..." to disappear (this means processing finished)
- Ensure you're speaking clearly
- Try shorter phrases first ("go to dashboard")
- Check console for errors (F12 → Console tab)

## Testing Steps

### Test 1: Basic Recognition
```
1. Navigate to Voice Assistant page
2. Click the microphone button
3. Say "hello" or "test"
4. You should see your words appear in cyan box
```

### Test 2: Navigation Commands
```
1. Click microphone
2. Say: "go to dashboard"
3. Should show: "I would navigate to dashboard"
```

### Test 3: Query Commands
```
1. Click microphone  
2. Say: "what is my balance"
3. Should show balance information
```

## Browser Compatibility

| Browser | Speech Recognition | Speech Synthesis | Status |
|---------|------------------|------------------|---------|
| Chrome  | ✅ Full Support | ✅ Full Support | **Recommended** |
| Edge    | ✅ Full Support | ✅ Full Support | ✅ Works Great |
| Safari  | ✅ Full Support | ✅ Full Support | ✅ Works |
| Firefox | ⚠️ Limited | ✅ Works | ⚠️ Use Chrome Instead |

## Debug Console Commands

Open browser console (F12) and run:

```javascript
// Check Speech Recognition support
console.log('Speech Recognition:', 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

// Check Speech Synthesis support  
console.log('Speech Synthesis:', 'speechSynthesis' in window);

// List available voices
speechSynthesis.getVoices().forEach(voice => console.log(voice.name, voice.lang));

// Test microphone permission
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(() => console.log('✅ Microphone access granted'))
  .catch(err => console.log('❌ Microphone denied:', err));
```

## Common Fixes

### Fix 1: Reset Permissions
```
Chrome/Edge: Settings → Privacy → Site Settings → Microphone → Reset
Safari: System Preferences → Security & Privacy → Microphone → Allow
```

### Fix 2: Clear Browser Cache
```
Ctrl+Shift+Delete → Clear cached images and files
```

### Fix 3: Restart Browser
```
Close all tabs → Exit completely → Reopen
```

## Expected Behavior

### ✅ Working Properly:
1. Click mic → Button turns red
2. Say "hello" → Words appear in cyan box in real-time  
3. Stop talking → After 1-2 seconds, box shows processing
4. AI responds → Both text and voice (if enabled)

### ❌ Not Working:
1. Click mic → Nothing happens
2. 404 error in console
3. Red error message appears
4. Microphone button stays gray

## Still Having Issues?

**Check the console for specific errors:**
- Open Developer Tools (F12)
- Go to Console tab
- Look for red error messages
- Copy the error and report it

**Try These Commands in Console:**
```javascript
// Force reload speech recognition
location.reload()

// Check if APIs are loaded
window.SpeechRecognition
window.webkitSpeechRecognition
window.speechSynthesis

// Test microphone directly
navigator.mediaDevices.getUserMedia({ audio: true })
```
