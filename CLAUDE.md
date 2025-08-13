# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is VitalWatch - a product landing page for a smart health monitoring watch. The project is built as a single-page application (SPA) using Vite with vanilla JavaScript, featuring Apple-inspired design and interactive health monitoring visualizations.

## Development Commands

- `npm run dev` - Start development server on http://localhost:5173
- `npm run build` - Build for production (outputs to `dist/` directory)  
- `npm run preview` - Preview production build locally

## Architecture & Structure

### Core Application
- **Entry Point**: `src/main.js` contains the `VitalWatch` class that orchestrates all interactive features
- **Styling**: `src/style.css` implements a comprehensive Apple-inspired design system with CSS custom properties
- **HTML Template**: `index.html` contains the complete static structure for the landing page

### Design System
The CSS architecture is built around CSS custom properties defined in `:root`:
- **Typography**: Uses Apple's system fonts with defined weight scales
- **Colors**: Semantic color tokens (primary, secondary, success, error, etc.)
- **Spacing**: Consistent spacing scale from `--spacing-xs` (8px) to `--spacing-3xl` (96px)
- **Shadows**: Tiered shadow system for depth and elevation
- **Transitions**: Consistent timing functions for smooth animations

### Interactive Features
The `VitalWatch` class manages three main interactive systems:
- **Smooth Scrolling**: Navigation between sections with `scrollIntoView`
- **Animated Vitals**: Real-time simulation of heart rate (70-77 BPM range) and hydration (80-90% range) with DOM updates every 3-5 seconds
- **Interactive Elements**: Button ripple effects, intersection observer animations for scroll-triggered reveals

### Responsive Design
Mobile-first approach with breakpoints at:
- 768px: Navigation menu collapses, hero switches to single column
- 480px: Feature grids collapse to single column

### Visual Components
- **Hero Watch Display**: CSS-animated floating watch face with live vitals
- **Feature Cards**: Hover effects with `translateY` transforms and shadow elevation
- **Health Dashboard**: Interactive progress rings using conic gradients, animated heart rate visualization
- **Navigation**: Fixed glassmorphism nav bar with backdrop-filter

## Key Implementation Notes

- All animations use CSS custom properties for consistent timing and easing
- Vitals simulation uses realistic ranges and intervals for believable health data
- Intersection Observer API provides performant scroll-triggered animations
- Button interactions include Material Design-inspired ripple effects
- The design system follows Apple's HIG principles for typography hierarchy and spacing