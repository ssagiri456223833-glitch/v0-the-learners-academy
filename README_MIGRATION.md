# The Learner's Academy – New Architecture Documentation

## 1. Core Architecture
The project has been systematically restructured from a monolithic shared layout to role-specific portals.

### Portals:
- **Admin Portal (`/admin`)**: High-level management, system health, and resource utilization.
- **Teacher Portal (`/teacher`)**: Assessment management, detailed analytics, and modular test building.
- **Student Portal (`/student`)**: High-stakes assessment interface with proctoring and performance feedback.

## 2. Design System Standards
A strict **8px spacing system** and **Premium Minimal** aesthetic have been enforced globally.

### Foundation:
- **Typography**: Paired **Serif** (Titles) and **Sans-Serif** (Interface labels) for a premium academic feel.
- **Layout**: Standardized 1240px containers with luxury white-space.
- **Components**: 
  - `Premium Card`: Subtle borders, minimal shadows, and interactive hover states.
  - `High-Fidelity Input`: Standardized `h-14` height for verification and `h-11` for dashboard searches.
  - `Strict Buttons`: Defined `Primary`, `Secondary`, `Ghost`, and `Danger` variants with active scale effects.

## 3. High-Value Features
- **Anti-Cheat Engine**: The student test interface monitors window focus. 3 violations trigger an auto-submit.
- **Modular Builder**: Teachers can now build tests question-by-question with specialized inputs for MCQ, Short, and Paragraph types.
- **Performance Analytics**: Centralized score tracking with skill progress visualizations (Vocabulary, Grammar, etc.).

## 4. Maintenance & Scaling
- **Mock Data**: Centralized in `lib/mock-data.ts` to allow for seamless transition to real API endpoints.
- **Portal Consistency**: Shared `PortalTopBar` ensures a unified user identity across different roles.
- **Code Cleanliness**: Legacy `AppLayout` and `Sidebar` components have been removed to prevent state conflicts.

---
*Developed for The Learner's Academy v2.4*
