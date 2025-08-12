---
title: "Vibe: My Experience with AI Assistance in Projects"
draft: true
tags: 
- ai
- development
- productivity
categories: 
- essays
terminal: vibe.md
date: 2025-08-12
lastmod: 2025-08-12
---

## 1. The Goal of This Post

To be open about what stages of projects I have tried to use AI assistance for, what stage of progress they have trivially gotten me to, what my major frustrations with them so far have been, and what I would like to see them accomplish as an incremental next step.

## 2. AI Assistance Experience Summary

| Project Stage | Progress Achieved | Major Frustrations | Desired Next Step | Last Update |
|---------------|-------------------|-------------------|-------------------|-------------|
{{- range .Site.Data.ai_assistance_experience.experiences }}
| {{ .project_stage }} | {{ .progress_achieved }} | {{ .major_frustrations }} | {{ .desired_next_step }} | {{ .last_update }} |
{{- end }}
