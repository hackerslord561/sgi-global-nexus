# SGI Global Nexus | Institutional Sovereign Infrastructure

**SGI Global Nexus** is a high-performance, institutional-grade web platform built for **SG International**. It serves as the digital nerve center for a trilateral operational corridor bridging **Washington D.C.**, **Accra**, and **Singapore**.

Developed with a "Light-Mode Architectural" aesthetic, the platform utilizes high-contrast surfaces, military-grade telemetry visualizations, and deep-navy structural grounding to project reliability and global presence.

---

## 🛠 Technical Stack

* **Framework:** Next.js 16.2.1 (Turbopack Optimized)
* **Styling:** Tailwind CSS (Custom Color Palette: Ghost, Navy-900, Gold, Steel)
* **Typography:** General Sans (Loaded via Fontshare CDN)
* **3D Engine:** React Three Fiber + Three.js (Interactive Trilateral Globe)
* **Animations:** Framer Motion (Node Networks, Orchestrated Transitions)
* **Icons:** Lucide React (Institutional Set)
* **Utilities:** `clsx` & `tailwind-merge` (Robust Class Composition)

---

## 🏗 Platform Architecture

### 1. Global Telemetry Layer (`LiveTicker`)
A fixed, high-priority (`z-[100]`) terminal at the absolute top of the viewport providing real-time commodity pricing (WTI, Brent, Nat Gas) and operational status updates for the trilateral hubs.

### 2. The Trilateral Corridor (`/trilateral-corridor`)
A WebGL-powered interactive environment. It features a custom-shaded 3D Earth that visualizes the physical and digital links between the three global headquarters.
* **Engineering Note:** Implemented `zIndexRange` mapping within the Three.js `Html` components to ensure 3D labels respect the fixed navigation hierarchy.

### 3. SGI Sentinel (`/sgi-sentinel`)
The defense and security cortex. It utilizes a **Framer Motion Node Network** to represent live AIS maritime tracking and encrypted logistical routing.
* **Design Pattern:** Uses `rounded-[2rem]` deep-navy cards against a `bg-ghost` architectural white backdrop for maximum visual authority.

### 4. SGI Capital (`/capital`)
The financial deployment dashboard. Features reactive metric cards with trend indicators and a dynamic `LiveChart` component utilizing de-synchronized hydration (`setTimeout`) to prevent SSR/CSR rendering cascades.

### 5. Institutional Footer
A deep-navy (`bg-navy-900`) anchor providing visual weight to the platform. It includes live synchronized clocks for **Washington D.C.**, **Accra**, and **Singapore**.

---

## 🚀 Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    ```

2.  **Install core dependencies:**
    ```bash
    npm install clsx tailwind-merge framer-motion lucide-react three @types/three @react-three/fiber @react-three/drei
    ```

3.  **Configure Environment:**
    Ensure the `public/` folder contains your `logo.png` and `assets/maritime-bg.mp4` for proper asset rendering.

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

---

## 🎨 Design System

| Element | Value |
| :--- | :--- |
| **Primary Background** | `#F8F9FA` (Ghost White) |
| **Surface/Cards** | `#001A38` (Navy-900) |
| **Accents** | `#D4AF37` (Gold) |
| **Typography** | General Sans (Bold/Black for Headings) |

---

## 👤 Credits

Built with ❤️ by **[Hackerslord Studios](https://hackerslord-portfolio.vercel.app)**.

*This project is a proprietary asset of SG International. Unauthorized replication of the Trilateral Globe logic or Sentinel Node Network is strictly prohibited.*