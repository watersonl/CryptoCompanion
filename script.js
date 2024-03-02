from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()

# Create a Fernet cipher object
cipher = Fernet(key)

# Message to encrypt
message = "Hello, World!"

# Encrypt the message
encrypted_message = cipher.encrypt(message.encode())

# Decrypt the message
decrypted_message = cipher.decrypt(encrypted_message).decode()

print("Original Message:", message)
print("Encrypted Message:", encrypted_message)
print("Decrypted Message:", decrypted_message)
