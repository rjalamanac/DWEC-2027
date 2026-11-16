// RealSubject: The actual service that does the heavy lifting
class DocumentService {
  constructor() {
    this.documents = new Map();
  }

  getDocument(id) {
    console.log(`Fetching document ${id} from database`);
    return this.documents.get(id);
  }

  addDocument(id, content) {
    console.log(`Adding document ${id} to database`);
    this.documents.set(id, content);
  }

  deleteDocument(id) {
    console.log(`Deleting document ${id} from database`);
    this.documents.delete(id);
  }
}

class LogService {
  constructor() {
    this.documents = new Map();
  }

  getDocument(id) {
    console.log(`Fetching document ${id} from database`);
    return this.documents.get(id);
  }

  addDocument(id, content) {
    console.log(`Adding document ${id} to database`);
    this.documents.set(id, content);
  }

  deleteDocument(id) {
    console.log(`Deleting document ${id} from database`);
    this.documents.delete(id);
  }
}

// Proxy: Controls access to the DocumentService
class DocumentServiceProxy  {
  constructor(user) {
    super();
    this.user = user;
  }

  // Check if user has correct permissions
  checkPermission(operation) {
    if (
      operation === "read" &&
      this.user.role !== "admin" &&
      this.user.role !== "user"
    ) {
      throw new Error("Access denied: No read permission");
    }

    if (
      (operation === "write" || operation === "delete") &&
      this.user.role !== "admin"
    ) {
      throw new Error(`Access denied: No ${operation} permission`);
    }

    return true;
  }

  getDocument(id) {
    this.checkPermission("read");
    return super.getDocument(id);
  }

  addDocument(id, content) {
    this.checkPermission("write");
    return super.addDocument(id, content);
  }

  deleteDocument(id) {
    this.checkPermission("delete");
    return super.deleteDocument(id);
  }
}

// Usage
const adminUser = { name: "Admin", role: "admin" };
const regularUser = { name: "User", role: "user" };
const guestUser = { name: "Guest", role: "guest" };

// Create proxies for different users
const adminService = new DocumentServiceProxy(adminUser);
const userService = new DocumentServiceProxy(regularUser);
const guestService = new DocumentServiceProxy(guestUser);

// Admin can do everything
adminService.addDocument("doc1", "Sensitive content");
adminService.getDocument("doc1");
adminService.deleteDocument("doc1");

// Regular user can only read
userService.getDocument("doc1"); // Works
userService.addDocument("doc2", "My content"); // Error: Access denied

// Guest has no permissions
guestService.getDocument("doc1"); // Error: Access denied
